
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDB from '../../../lib/db';
import Company from '@/models/company';

export async function GET(request: NextRequest) {
  try {
    const { companyName } = await request.json();

    if (!companyName) {
      throw new Error("Company name required!")
    }
    await connectDB();

    const company = await Company.find({ name: companyName }).populate('staffs')

    return NextResponse.json(company);
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}