"use server"
import { registerSchema } from '../../lib/constants';
import * as z from "zod"
import connectDB from '../../lib/db';
import bcrypt from "bcryptjs";
import Company from '../../models/company';
import User from '../../models/user';
import nodeMailer from "nodemailer";

//register company or standart user
export async function register(values: z.infer<typeof registerSchema>) {
  try {
    const result = registerSchema.safeParse(values)
    if (!result.success) {
      // @ts-ignore
      return { success: false, error: result.error.format() }
    }

    const { email, password, companyName } = values;

    await connectDB();

    const userExists = await User.findOne({ email });
    if (userExists) {
      return { success: false, message: 'User Already Exists.' }
    }

    if (companyName) {
      const companyExists = await Company.findOne({ name: companyName });
      companyExists ? invite(values, companyExists._id) : registerTeamUser(values);

    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      await User.create({ email, password: hashedPassword });
    }

    return { success: true, message: 'Registered Successfully!', email }
  } catch (error) {
    console.log(error);

    return { success: false, message: error }
  }
}

export async function invite(values: z.infer<typeof registerSchema>, companyId: string) {
  const { email, companyName } = values;

  try {
    const client = nodeMailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.MAIL_PASS
      }
    });
    const mailOptions = {
      from: process.env.USER_EMAIL,
      to: email,
      subject: `You have invited to ${companyName} feedbacker team`,
      html: `<a href=${process.env.BASE_URL}/register/${companyId}>${process.env.BASE_URL}/register/${companyId}</a>`
    }

    client.sendMail(mailOptions)
  } catch (err) {
    console.log("ERROR: ", err)
  }
}

export async function registerTeamUser(values: z.infer<typeof registerSchema>, companyId?: string) {
  try {
    const { email, companyName, password } = values;

    await connectDB()

    let company: any
    companyId
      ? company = await Company.findById(companyId)
      : company = await Company.create({ name: companyName })

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hashedPassword, company });
    company.staffs.push(user)
    await company.save()
    return { success: true }

  } catch (error) {
    console.log(error);
  }
}


export async function voteFeedback() {
  
}