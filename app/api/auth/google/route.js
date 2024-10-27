// app/api/auth/google/route.js
import { googleAuth } from '@/controllers/authController';
import connectToDatabase from '@/lib/mongodb';

export async function POST(req, res) {
  await connectToDatabase();
  return await googleAuth(req, res);
}
