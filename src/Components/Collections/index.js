import React from "react";
import "./Collections.scss";
import design from "../../assets/images/design.png";
function Collections() {
  return (
    <div className="d-flex justify-content-center justify-content-evenly align-items-center design">
      <img src={design} alt="design" className="designImage" />
      <img src={design} alt="design" className="designImage" />
      <img src={design} alt="design" className="designImage" />
      <img src={design} alt="design" className="designImage" />
      <img src={design} alt="design" className="designImage" />
      <img src={design} alt="design" className="designImage" />
    </div>
  );
}

export default Collections;
