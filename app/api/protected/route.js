// app/api/protected/route.js
import connectToDatabase from '@/lib/mongodb';
import { verifyToken } from '@/middleware/verifyToken';
import { getUserById } from '@/middleware/getUserById';
import { checkBlacklist } from '@/middleware/checkBlacklist';
import { NextResponse } from 'next/server';

export async function GET(request) {
  await connectToDatabase();

  // Run middlewares sequentially
  await verifyToken(request, NextResponse, async (err) => {
    if (err) return err;
    await checkBlacklist(request, NextResponse, async (err) => {
      if (err) return err;
      await getUserById(request, NextResponse, (err) => {
        if (err) return err;

        // The protected resource logic can go here
        return NextResponse.json({
          message: 'Protected resource accessed!',
          user: request.user,
        });
      });
    });
  });
}
