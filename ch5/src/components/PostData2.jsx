// In direct Post using Server Action :- no use of use client , hooks 
// Use only form action={function}

//'use server' if not use then throw-  Error: Functions cannot be passed directly to Client Components unless you explicitly expose it by marking it with "use server". Or maybe you meant to call this function rather than return it.  <form action={function create} children=...>


import connectDB from "@/lib/connectDB"
import PostModel from "@/models/Post";


const create = async (formData) => {
  'use server'; // use mandatory
  await connectDB();
  const result = await PostModel.create({
    title: formData.get('title'),
    body: formData.get('body'),
  })
  // console.log("Result:-", result);
  console.log("Post/created data successfully...");
}

const PostData2 = () => {

  return (
    <form action={create}>
      Title: <input type="text" name="title" className="text-black p-2 bg-amber-50" />
      <br /> <br />
      Body: <input type="text" name="body" className="text-black p-2 bg-amber-50" />
      <br /> <br />
      <button type="submit" className="p-2 bg-rose-600 cursor-pointer">Submit</button>

    </form>
  )
}

export default PostData2