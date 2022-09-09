import React from "react";
import "./ContactUs.scss";
import Curve from "../../assets/images/Curve.png";
import { IoIosCall } from "react-icons/io";
function ContactUs() {
  return (
    <div className="contactUs d-flex justify-content-around align-items-center">
      <div>
        <h3 className="fw-bold takecareText">
          We take care you and your family
        </h3>
        <p className="Klaritas-text">
          Klaritas est etiam processus dynamicus qui sequitur mutuation
          consuetudium <br />
          lectorum.mirum est notare quam littera gothica quam nunc.
        </p>
      </div>
      <img src={Curve} alt="curve" />
      <div>
        <p className="text-white ContactBackground">
          <IoIosCall size="20px" />
          CONTACT US
        </p>
      </div>
    </div>
  );
}
export default ContactUs;
