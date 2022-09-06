import React from "react";
import "./WelcomeNavbar.scss";
function WelcomeNavbar() {
  return (
    <div>
      <div className="welcome-nav d-flex justify-content-around align-items-center">
        <div>
          <p className="text-white">
            Welcome to Our Insurance , Enjoy Your Dream With Us{" "}
          </p>
        </div>
        <div className="d-flex justify-content-between text-white policies">
          <p>Privacy Policy</p>
          <p>Need help?</p>
          <p>Faq</p>
        </div>
      </div>
    </div>
  );
}

export default WelcomeNavbar;
