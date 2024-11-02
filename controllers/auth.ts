// controllers/auth.ts

import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';
import User from '../model/User';
import Blacklist from '../model/Blacklist';
import {
  generateToken,
  sendErrorResponse,
  sendSuccessResponse,
} from '@/lib/auth';

/**
 * Handles user sign-up by creating a new user, hashing the password,
 * and generating a token for authentication.
 *
 * @param {NextRequest} req - The incoming request object.
 * @param {NextResponse} res - The outgoing response object.
 * @returns {Promise<NextResponse>} - Returns a success response with user data and token.
 */
export const signUp = async (
  req: NextRequest,
  res: NextResponse
): Promise<NextResponse> => {
  try {
    const body = await req.json();
    const { password, ...userData } = body;

    if (!password) return sendErrorResponse(400, 'Password is required', res);

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ ...userData, password: hashedPassword });
    const newUser = await user.save();

    const {
      password: _,
      resetPasswordToken,
      resetPasswordTokenExpiry,
      lastSignedOut,
      ...userDetails
    } = newUser._doc;
    const token = generateToken(newUser._id);

    return sendSuccessResponse(201, 'User has been created', {
      data: userDetails,
      token,
    });
  } catch (err: any) {
    if (err.code === 11000)
      return sendErrorResponse(400, 'Email already exists', res);
    console.error(err);
    return sendErrorResponse(500, 'Internal server error', res);
  }
};

/**
 * Handles user sign-in by validating credentials and returning a token for authentication.
 *
 * @param {NextRequest} req - The incoming request object.
 * @param {NextResponse} res - The outgoing response object.
 * @returns {Promise<NextResponse>} - Returns a success response with user data and token.
 */
export const signIn = async (
  req: NextRequest,
  res: NextResponse,
  next: Function
) => {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!password) return sendErrorResponse(400, 'Password is required');

    const user = await User.findOne({ email });
    if (!user) return sendErrorResponse(404, 'User not found');
    if (!user.password && user.fromGoogle)
      return sendErrorResponse(403, 'Sign in with Google is required.');

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return sendErrorResponse(400, 'Invalid credentials');

    const token = generateToken(user._id);
    const {
      password: _,
      resetPasswordToken,
      resetPasswordTokenExpiry,
      lastSignedOut,
      ...userDetails
    } = user._doc;

    return sendSuccessResponse(200, 'User has been signed in', {
      data: userDetails,
      token,
    });
  } catch (err: any) {
    console.error(err);
    next(err);
  }
};

/**
 * Handles Google-based authentication by creating or retrieving a user and returning a token.
 *
 * @param {NextRequest} req - The incoming request object.
 * @param {NextResponse} res - The outgoing response object.
 * @param {Function} next - Error handling middleware.
 * @returns {Promise<NextResponse>} - Returns a success response with user data and token.
 */
export const googleAuth = async (
  req: NextRequest,
  res: NextResponse,
  next: Function
) => {
  try {
    const body = await req.json();
    const { email, ...userData } = body;

    let user = await User.findOne({ email });
    if (!user) {
      user = await new User({ ...userData, fromGoogle: true }).save();
    }

    const token = generateToken(user._id);
    return sendSuccessResponse(201, 'User authenticated successfully', {
      data: user._doc,
      token,
    });
  } catch (err: any) {
    console.error(err);
    next(err);
  }
};

/**
 * Handles user sign-out by blacklisting the user's token.
 *
 * @param {NextRequest} req - The incoming request object.
 * @param {NextResponse} res - The outgoing response object.
 * @param {Function} next - Error handling middleware.
 * @returns {Promise<NextResponse>} - Returns a success response if the token is blacklisted successfully.
 */
export const signOut = async (
  req: NextRequest,
  res: NextResponse,
  next: Function
) => {
  try {
    const authHeader = req.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return sendErrorResponse(401, 'Authorization token required');
    }

    const token = authHeader.split(' ')[1];
    await Blacklist.create({ token });

    return sendSuccessResponse(200, 'User successfully signed out');
  } catch (err: any) {
    console.error(err);
    next(err);
  }
};
