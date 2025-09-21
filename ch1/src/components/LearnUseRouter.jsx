'use client'
import { useRouter } from "next/navigation"



const LearnUseRouter = () => {
  const router = useRouter();
  // console.log('Details inside router',router);

  return (
    <>
      <h1>LearnUseRouter</h1>
      <button type="button" onClick={() => router.push('/admin/dashboard')}
        className="cursor-pointer underline">Go to admin dashboard via UseRouter</button>
    </>
  )
}

export default LearnUseRouter