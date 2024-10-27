// app/api/users/route.js
import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import User from '@/models/User';

export async function GET(request) {
  await connectToDatabase(); // Ensure the database is connected

  try {
    const users = await User.find();
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  await connectToDatabase();

  try {
    const data = await request.json();
    const newUser = await User.create(data);
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create user' },
      { status: 500 }
    );
  }
}
