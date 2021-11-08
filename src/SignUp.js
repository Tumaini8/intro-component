import React, { useState } from "react";
import "./SignUp.css";

export default function SignUp() {
  let [firstName, setFirstName] = useState(" ");

  let [password, setPassword] = useState(" ");

  function handleName1(event) {
    event.preventDefault();
    setFirstName(event.target.value);
  }

  function handlePassword(event) {
    event.preventDefault();
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Your credentials are: Fist name: ${firstName} , Password: ${password}`);
  }

  return (
    <div className="SignUp">
      <form >
        <input
          type="First name"
          placeholder="Enter first name"
          onChange={handleName1}
        />
        <input type="Last name" placeholder="Enter last name" />
        <input type="Email address" placeholder="Enter your email address" />
        <input
          type="Password"
          placeholder="Password"
          onChange={handlePassword}
        />
      </form>
      <button className="btn btn-success" onClick={handleSubmit}>Claim your free trail</button>
      <p className="info">
        By clicking the button, you are agreeing to our{" "}
        <a href="/">Terms and services</a>
      </p>
    </div>
  );
}
