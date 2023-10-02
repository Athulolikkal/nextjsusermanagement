import Axios from "@/axios/axios";
import { NextRequest, NextResponse } from "next/server";
import { registerUser } from "@/hasuraQuery/authentication";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { name, email, password } = reqBody;

    const userMutation = await registerUser(name, email, password);
    const response = await Axios.post("", {
      query: userMutation,
      variables: {
        name: name,
        email: email,
        password: password,
      },
    });
    if (response?.data?.errors) {
      return NextResponse.json({ success: false,message:'email already exists' });
    }
    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ success:false,message:'server error' });
  }
}
