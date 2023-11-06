import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDB from '../../../lib/db';
import Company from '@/models/company';

export async function POST(request: NextRequest) {
  try {
    const { name, email, password, companyName } = await request.json();

    if (!name || !email || !password || !companyName) {
      throw new Error("All fields required!")
    }
    await connectDB();

    const hashedPassword = await bcrypt.hash(password, 10);

    await Company.create({ name: companyName })
    await User.create({ name, email, password: hashedPassword });

    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}