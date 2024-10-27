// app/api/auth/signout/route.js
import { signOut } from '@/controllers/authController';
import connectToDatabase from '@/lib/mongodb';
import { verifyToken } from '@/middleware/verifyToken';

export async function POST(req, res) {
  await connectToDatabase();

  // Verify the token before allowing sign-out
  await verifyToken(req, res, async (err) => {
    if (err) return res.status(err.status || 500).json({ error: err.message });
    return await signOut(req, res);
  });
}
