import Axios from "@/axios/axios";
import { NextRequest, NextResponse } from "next/server";
// import bcryptjs from 'bcryptjs';

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    console.log(reqBody, "req.body");
    const { name, email, password } = reqBody;
    const response = await Axios.post("", {
      query: `
        mutation Adduser($name:String!,$email:String!,$password:String!){
            insert_users_one(object:{name:$name,email:$email,password:$password}){
                id,name,email
            }
        }
        `,
      variables: {
        name: name,
        email: email,
        password: password,
      },
    });
    console.log(response, ":response");
    return NextResponse.json({ email, password });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
