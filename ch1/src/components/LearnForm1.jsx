"use client"
import { useState } from  'react'

const LearnForm1 = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: ""
  })  // use as object 

    const handleChange = (e) =>{
      setFormData({ ...formData, [e.target.name]: e.target.value } )
    } // e.target.name is the name of the input field         

  // Handle all element at once in below code

  return (
    <>
      <h2>Learn Form in which  Handle all element at once</h2>
      <br />
      <br />
      <form action="">
        First Name: <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        <br />
        <br />
        Last Name: <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        <br />
        <br />
      </form>
    </>
  )
}

export default LearnForm1