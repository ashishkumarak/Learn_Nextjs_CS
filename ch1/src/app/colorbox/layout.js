

export default function ColorboxLayout ({children , left , right}){

    const isSidebar = true;
   
  return (
    <>
    {children}
    {/* {left}
    {right} */}
    
    {isSidebar? left : right}
    </>
  )
}