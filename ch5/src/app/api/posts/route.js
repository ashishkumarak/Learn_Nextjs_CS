import connectDB from "@/lib/connectDB";
import { NextResponse } from "next/server";
import PostModel from "@/models/Post"


export async function GET(req){
 try {
    await connectDB(); // call to make connection
    const result = await PostModel.find(); // fetching all data from DB
    return NextResponse.json({"Result" : result} , {status: 200});
    

  } catch (error) {  
     console.log(error)  ;
     return NextResponse.json({"msg":"Something went wrong."} , {status: 400});
  }
}