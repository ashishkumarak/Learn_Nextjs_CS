import { NextResponse } from "next/server";

// ****************** using arrow function of GET() **********************
export const GET = async (req , context) =>{
  // console.log("Req:", req);

  // Capture params of URL query via context
// console.log("Context: ", context); 
   console.log("Context.params: ", await context.params);
   console.log("Context.params.id: ", await context.params.id);

   
  return NextResponse.json({"msg":"GET Success."} , {status: 200})

}




 // Capture params in destructering form of URL query ********************
// export const GET = async (req , { params }) =>{
//    console.log("params.id:- ", params.id);  

//   return NextResponse.json({"msg":"GET Success."} , {status: 200})

// }