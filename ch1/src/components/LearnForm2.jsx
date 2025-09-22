"use client"
import { useState } from "react"


const LearnForm2 = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: ""
  })  // use as object 

    const handleChange = (e) =>{
      setFormData({ ...formData, [e.target.name]: e.target.value } )
    } // e.target.name is the name of the input field    
  

  // ****** Handle Form on Submit so capture the form data ***********
  const handleFormSubmit = (e) =>{
    e.preventDefault(); // prevent the page to reload
    console.log("Submit Button Clicked",formData);
  } 
  

  // Handle all element at once in below code

  return (
    <>
      <h2>Learn Form in which how capture the form data</h2>
      <br />
      <br />
      <form action="" onSubmit={handleFormSubmit}>
        First Name: <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        <br />
        <br />
        Last Name: <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default LearnForm2