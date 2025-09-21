//  here below params return promise thats why using async await for clear o/p in console

const Posts = async({params}) => {
  const p = await params;
  console.log(p);
  return (
    <div>Posts page, catch all 
      <hr />
      {/* {params.posts} */}
    </div>
  )
}

export default Posts