
//import "bootstrap/dist/css/bootstrap.css";
//import React from 'react';
import bgImage from "../images/bg2.jpg";
import Navigation from "./Navigation";

export default function Header() {
return( 
    <header>

    <div className="page-header min-vh-100 truth" style = {{ loading: 'lazy', width: '100%'}}>
    <span className="mask bg-gradient-dark opacity-5"></span>
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-lg-6  d-flex justify-content-center flex-column">
          <h1 className="text-white pt-3 mt-n5">Welcome to Revveds Pet Adoption</h1>
          <p className="text-white lead pt-3">The time is now for it be okay to be great. People in this world shun people for being nice. </p>
          <div className="buttons">
            <button type="button" className="btn btn-white mt-4">Get Started</button>
            <button type="button" className="btn text-white shadow-none mt-4">Read more</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
)
}