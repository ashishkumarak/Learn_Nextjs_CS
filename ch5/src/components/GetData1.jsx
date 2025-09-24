

const getData = async ()=>{
  const res = await fetch("http://localhost:3000/api/posts" , { 
        method : 'GET' ,
        headers : {
          'Content-type' : 'application/json',        
        }
  } );

  const posts= await res.json();
  return posts

}

const GetData1 = async () => {
  
  const  allPosts = await getData();
  // allPosts.Result.map --- below it is used b/c data comes like
  // { "Result-": [ { "title": "First Title", "body": "First Body" } , { : } ]}

  return (
   <>
   {
    allPosts.Result.map( (items, index)=> (
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

export default GetData1