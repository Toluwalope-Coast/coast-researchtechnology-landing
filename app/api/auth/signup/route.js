// app/api/auth/signup/route.js
import { signUp } from '@/controllers/auth';
import connectToDatabase from '@/lib/mongodb';

export async function POST(req, res) {
  try {
    await connectToDatabase();
    return await signUp(req, res);
  } catch (err) {
    errorHandler(err, req, res);
  }
}
