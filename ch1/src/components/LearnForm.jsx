"use client"

import { useState } from "react"


const LearnForm = () => {

  const [firstName, setFirstName]= useState("");
  const [lastName, setLastName]= useState('');

  const handleFirstName =(e) => {
    setFirstName(e.target.value);
  }

  const handleLastName =(e) => {
    setLastName(e.target.value);
  }


  // Handle element one by one in this code
  return (
    <>
    <h2>Learn Form</h2>
    <form action="">
      First Name: <input type="text" name="firstName" value={firstName} onChange={handleFirstName} /> 
      <hr />
      Last Name: <input type="text" name="lastName" value={lastName} onChange={handleLastName} />
    </form>
    
    </>
  )
}

export default LearnForm