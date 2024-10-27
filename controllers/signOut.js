// controllers/authController.js

// Import the Blacklist model and any utilities
import Blacklist from '../models/Blacklist';
import { createError } from '@/utils/error';

export const signOut = async (req, res) => {
  try {
    const User = req.user; // Assumes `verifyToken` middleware has attached `req.user`

    if (!user)
      return res.status(404).json({ error: 'User not found for sign-out' });

    // Update last signed-out timestamp for the user
    await User.findByIdAndUpdate(user._id, { lastSignedOut: new Date() });

    // Add token to blacklist
    await Blacklist.create({ token: req.cookies.access_token });

    // Clear the cookie
    res
      .clearCookie('access_token', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
      })
      .status(200)
      .json({ message: 'User logged out successfully' });

    console.log(`User ${user.email} signed out.`);
  } catch (err) {
    console.error('Error during sign-out:', err);
    res.status(500).json({ error: 'Internal server error during sign-out' });
  }
};
