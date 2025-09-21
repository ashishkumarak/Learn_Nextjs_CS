import Image from "next/image"

import img1 from "../../public/images/bird1.png"

const LearnUseImage = () => {
  return (
    <>
    Using Image tag in nextjs which is optimised.
    <Image src={img1} alt="Bird image" width={500} height={100}/>
    </>
  )
}

export default LearnUseImage