import { cookies } from "next/headers";
import { NextResponse } from "next/server";

//any function you write like arrow function or normal function
// here you use method like GET  POST  PUT  DELETE



// **********************  GET() ***************************
export async function GET(req){
  // check req object at console --------------------
  // console.log(req);

  // check Headers object at console ----------------
  const requestHeaders = new Headers(req.headers);
  // console.log(requestHeaders);

  // URL Query Parameter ----------------------------
  // For this URL-- http://localhost:3000/api/products?search="java"
  const {searchParams} = new URL(req.url); // Ist method
  // console.log(searchParams);
  // console.log(searchParams.get("search")); 
  // use .get() and pass the key like "search" and get o/p "java"

  const searchParams1 = req.nextUrl.searchParams ; 
  // console.log(searchParams1); // IInd method

    // Request Cookies -------------------------------
  const cook1 = req.cookies ;  // First method
  // console.log("Cookies1--",cook1);
  const cook2 = cookies() ;  // Second method using cookies() function and o/p is promise
  // console.log("Cookies2--",cook2);


  return NextResponse.json({ "msg" : "Hello Nextjs API"})
}








// **********************  POST() ***************************
// Use Postman for posting the data.
export async function POST(req){
// console.log(req);

  // Request Body - capture data sending from Postman/Form
//      First Way using .json() and send {
//     "title": "first title 1",
//     "body" : "firtst body 1"
// } via POSTMAN

  const res = await req.json();
  // console.log("Req JSON",res);

  // Second Way using .formData() , send data  via POSTMAN
 const formData = await req.formData();
//  console.log("Req FormData:", formData);
//  console.log("Req FormData", formData.get("title"));
//  console.log("Req FormData", formData.get("body"));



  return NextResponse.json({"msg" : "Post Success."} , {status : 201 } ) // Change status code to 201.
}