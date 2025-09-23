// NOTE:- "use client" is not used because throw 
// Console Error - <APIhitbackend> is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding "use client" to a module that was originally written for the server.


// Here we hit own created API ( in which it hitting paid API , present at backened) so get the Data and show here at frontened side.
// here we did not use Paid API b/c to prevent key expose 
// but here we can use public API directly .

const getData = async() =>{
const res = await fetch("http://localhost:3000/api/blog/posts" , { 
        headers : {
          'Content-type' : 'application/json',        
        }
  } );

  const posts = await res.json();

  return posts

}

const APIhitbackend = async() => {
  const allPosts = await getData();
  // allPosts.Data.map --- below it is used b/c data comes like
  // { "Data":[ {  "title": "sunt ... ",   "body": "quia et ... "    }, ] }
  
  return (  
  <> 
    {
      allPosts.GettingData.map( (items , index) => (
        <div key={index}>
        <h1> {items.title}</h1>
        <p> {items.body}</p>
        <hr />
        </div>
      ))
    }
  </>
  )
}

export default APIhitbackend

