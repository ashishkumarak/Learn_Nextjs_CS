// Nextjs also known new PHP because without using API route you can 
// Get the data from MongoDb via using direct method

import connectDB from "@/lib/connectDB"
import PostModel from "@/models/Post";


const GetData2 = async () => {
  
  // direct using connection and fetch data
  await connectDB();
  const allPosts = await PostModel.find();
  

  return (
   <>
   {
    allPosts.map( (items, index)=> (
      <div key={index}>
        <h1 className="text-red-500"> {items.title}</h1>
        <p>{items.body}</p>
        <hr />
      </div>
    ) )
   }
   
   </>
  )
}

export default GetData2