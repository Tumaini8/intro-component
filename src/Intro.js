import React from "react";
import SignUp from "./SignUp.js";

export default function Intro() {
  return (
    <div className="Intro">
      <h6 className="border border-primary">Try it free 7days</h6>
      <div className="row">
        <div className="col-6">
          <p>
            Learn to code by
            <br />
            watching others
            <br />
            see how experienced developers
            <br />
            solve problems in real-time.
            <br />
            Watching scripted tutorial is <br />
            great but understanding how
            <br />
            developes think is invaluable
          </p>
        </div>
        <div className="col-6">
          <section>
            <SignUp />
          </section>
        </div>
      </div>
    </div>
  );
}
