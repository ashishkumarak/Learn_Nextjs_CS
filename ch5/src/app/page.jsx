import GetData1 from "@/components/GetData1";
import GetData2 from "@/components/GetData2";
import PostData1 from "@/components/PostData1";
import PostData2 from "@/components/PostData2";


export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">

      <h1> Mongo DB Integration</h1>
      <br />

      {/* <PostData1 /> */}
      {/* <GetData1 /> */}

      {/* <GetData2 /> */}
      <PostData2 />

    </div>
  );
}
