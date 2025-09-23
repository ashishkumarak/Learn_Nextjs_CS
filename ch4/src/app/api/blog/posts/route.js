import { NextResponse } from "next/server";

// Here create own API for hitting the paid API *******************

export async function GET(req)  {

  const res = await fetch("https://jsonplaceholder.typicode.com/posts" , { 
        headers : {
          'Content-type' : 'application/json',        
        }
  }); // here we pass Paid API having Key , username , password for preventing to expose in frontend make Security layer . So here created API (backened) hits jsonplaceholder API 

  const posts = await res.json();



  return NextResponse.json({"GettingData" : posts})
  
}