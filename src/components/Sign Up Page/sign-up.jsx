import React, { useState, useEffect } from "react";
import './signup.css';
import {Link} from 'react-router-dom';

function SignUp() {

  useEffect(() => {

  }, [])

  const submitUser = async () => {
    const myData = {
      name: contact.name, 
      email: contact.email, 
      password: contact.password, 
      passwordConfirm: contact.passwordConfirm,
      role: contact.role
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
    name: "",
    email: "",
    password: "", 
    passwordConfirm: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContact(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function handleClick(event) {
    // event.preventDefault();
    console.log(contact.name, contact.email);
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
          value={contact.name}
          name="name"
          placeholder="Enter Name"
        />
        <input
          onChange={handleChange}
          value={contact.email}
          name="email"
          placeholder="Enter Email"
        />
        <input
          onChange={handleChange}
          value={contact.password}
          name="password"
          placeholder="Enter Password"
        />
        <input
          onChange={handleChange}
          value={contact.passwordConfirm}
          name="passwordConfirm"
          placeholder="Confirm Password"
        />
        <input
          onChange={handleChange}
          value={contact.role}
          name="role"
          placeholder="Enter Role"
        />
        <Link to="/projects"><button onClick={handleClick}>Sign Up</button></Link>
      </form>
      <p className="m-5">Already have an account? <span className="font-bold">Login</span></p>
    </div>
  );
}

export default SignUp;
