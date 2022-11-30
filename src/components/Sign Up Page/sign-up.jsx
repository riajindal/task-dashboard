import React, { useState, useEffect } from "react";
import './signup.css';
import {Link} from 'react-router-dom';

function SignUp() {

  useEffect(() => {

  }, [])

  const submitUser = async () => {
    const myData = {
      name: contact.fName, 
      email: contact.email, 
      password: "genius2424", 
      passwordConfirm: "genius2424"
    };

    const result = await fetch('/api/v1/users/signup', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(myData)
    })

    const resultInJSON = await result.json();
    console.log(resultInJSON);
    console.log('hello');

  }

  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContact(prevValue => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email
        };
      } else if (name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value
        };
      }
    });
  }

  function handleClick(event) {
    // event.preventDefault();
    console.log(contact.fName, contact.email);
    submitUser();
  }

  return (
    <div className="container">
      <h1>
        Hello
      </h1>
      <form>
        <input
          onChange={handleChange}
          value={contact.fName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          value={contact.lName}
          name="lName"
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          value={contact.email}
          name="email"
          placeholder="Email"
        />
        <Link to="/projects"><button onClick={handleClick}>Sign Up</button></Link>
      </form>
      <p className="m-5">Already have an account? <span className="font-bold">Login</span></p>
    </div>
  );
}

export default SignUp;
