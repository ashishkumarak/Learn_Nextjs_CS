
async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // In fetch you can pass header , method and by default GET method used.

  return res.json()
  // return in array form using json()
}

const LearnDataFetching = async () => {

  const data = await getData();
  // console.log(data); // o/p in console
  return (
    <>
      Learn Data fetching from Fetch method and show in web(clientside) using Map function.
      <br />
      <br />
      {
        data.map((items, index) => (
          <div key={index}>
            <h1>{items.title}</h1>
            <p>{items.body}</p>
            <br />
          </div>
        )
        )
      }

    </>
  )
}

export default LearnDataFetching