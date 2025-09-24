import connectDB from "@/lib/connectDB";
import { NextResponse } from "next/server";
import PostModel from "@/models/Post"

// ---- Retrieving Data -------
export async function GET(req){
 try {
    await connectDB(); // call to make connection
    const result = await PostModel.find(); // fetching all data from DB
    console.log("Retrieving Data -------");

    return NextResponse.json({"Result" : result} , {status: 200});
    

  } catch (error) {  
     console.log(error)  ;
     return NextResponse.json({"msg":"Something went wrong."} , {status: 400});
  }
}


// ---- Creation/Posting Data -----
export async function POST(req){
  const body = await req.json() ; // get formData
  try {
    await connectDB(); // call to make connection
    const result = await PostModel.create(body); // Insert Data into mongoDB
    console.log("Posting Data -----");

     return NextResponse.json({"Result" : result} , {status: 201});

  } catch (error) {  
     console.log(error)  ;
     return NextResponse.json({"msg":"Something went wrong."} , {status: 400});
  }
} 

