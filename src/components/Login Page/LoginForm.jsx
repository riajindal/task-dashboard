import React, { useState } from "react";
import './login.css';
import {useNavigate} from 'react-router-dom';

function LoginForm() {

  var loginStatus;
  var loginAlertMessage;
  const navigate = useNavigate();

  const checkUser = async () => {
    const myData = {
      email: contact.email, 
      password: contact.password
    };

    const result = await fetch('/api/v1/users/login', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(myData)
    })

    const resultInJSON = await result.json();
    loginStatus = resultInJSON.status;
    loginAlertMessage = resultInJSON.message;
    console.log(resultInJSON);
  }

  const [contact, setContact] = useState({
    email: "",
    password: ""
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

  async function handleClick(event){
    event.preventDefault();
    await checkUser();
    if(loginStatus === 'Fail') {
      alert(loginAlertMessage);
    } else {
      navigate('/projects');
    }
  }

  function alertMessages(){
    alert(contact.email)
    alert(contact.password)
  }

  return (
    <div className="container">
      <h1>
        Welcome back
      </h1>
      <form>
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
        
        <button onClick={alertMessages}>Login</button>
      </form>
      <p className="m-5">Don't have an account? <span className="font-bold">Sign Up</span></p>
    </div>
  );
}

export default LoginForm;
