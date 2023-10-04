import Axios from "@/axios/axios";
import { NextRequest, NextResponse } from "next/server";
import { findUserByEmail } from "@/hasuraQuery/authentication";
import { isValidPassword } from "@/app/services/authservices/bcryptservices";

export async function POST(request: NextRequest) {
  try {

    const reqBody = await request.json();
    const { email, password } = reqBody;
    const userQuery= await findUserByEmail(email)
    const findUser= await Axios.post("",{
      query:userQuery,
      variables:{
        email:email
      },
    });
  
    const userPassword= findUser?.data?.data?.users_users[0]?.password
    
    if(!userPassword){
    return NextResponse.json({
      success:false,
      message:"incorrect email or password"
    });
    }else{
     const passwordIsValid= await isValidPassword(password,userPassword)
     if(passwordIsValid){
      return NextResponse.json({
        success:true,
        message:"login successfull"
      })
     }else{
      
      return NextResponse.json({
        success:false,
        message:"incorrect email or password"
      })
     }
    }

  } catch (err: any) {
    return NextResponse.json({
      success:false,
      message:'network issue'
    });
  }
}
