import Axios from "@/axios/axios";
import { NextRequest, NextResponse } from "next/server";
import { registerUser } from "@/hasuraQuery/authentication";
import { hashPassword } from "@/app/services/authservices/bcryptservices";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { name, email, password } = reqBody;
   

    const hashedPassword = await hashPassword(password);

    const userMutation = await registerUser(name, email, hashedPassword);
    const response = await Axios.post("", {
      query: userMutation,
      variables: {
        name: name,
        email: email,
        password: hashedPassword,
      },
    });
    if (response?.data?.errors) {
      return NextResponse.json({
        success: false,
        message: "email already exists",
      });
    }
    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ success: false, message: "server error" });
  }
}
