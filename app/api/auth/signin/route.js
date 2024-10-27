// app/api/auth/signin/route.js
import { signIn } from '@/controllers/authController';
import connectToDatabase from '@/lib/mongodb';

export async function POST(req, res) {
  await connectToDatabase();
  return await signIn(req, res);
}
