import React from "react";
import "./SignUp.css";

export default function SignUp() {


  return (
    <div className="SignUp">
      <form>
        <input type="First name" placeholder="Enter first name" />
        <input type="Last name" placeholder="Enter last name" />
        <input type="Email address" placeholder="Enter your email address" />
        <input type="Password" placeholder="Password" />
      </form>
      <button className="btn btn-success">Claim your free trail</button>
      <p className="info">
        By clicking the button, you are agreeing to our{" "}
        <a href="/">Terms and services</a>
      </p>
    </div>
  );
}
