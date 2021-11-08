import React from "react";
import SignUp from "./SignUp.js";
import "./Intro.css";

export default function Intro() {
  return (
    <div className="Intro">
      <div className="row">
        <div className="col-md-6">
          <p>
            Learn to code by watching others see how experienced developers
            solve problems in real-time. Watching scripted tutorial is <br />
            great but understanding how developes think is invaluable
          </p>
        </div>
        <div className="col-md-6">
          <section>
            <h6 className="border border-primary">Try it free 7days</h6>
            <SignUp />
          </section>
        </div>
      </div>
    </div>
  );
}
