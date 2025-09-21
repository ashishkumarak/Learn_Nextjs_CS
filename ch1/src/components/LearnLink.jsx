import Link from "next/link"

// Two ways how to use Link tag
const LearnLink = () => {
  const id = 123;

  return (
    <>
    <Link href="/admin/dashboard" className="underline">Go to Admin Dashboard Page via link tag
    </Link>

    <Link href={`/user/profile/${id}`} className="underline text-orange-500">Go to User Profile page via link tag</Link>
    
    </>
  )
}

export default LearnLink