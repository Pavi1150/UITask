import React from "react";
import "./EmailNavbar.scss";
import { BiPhoneCall } from "react-icons/bi";
import { IoChatbubblesOutline } from "react-icons/io5";

function EmailNavbar() {
  return (
    <div className="email-nav d-flex justify-content-around align-items-center">
      <div className="d-flex">
        <div>
          <BiPhoneCall size="60" className="mt-1" color="#7dba2f" />
        </div>
        <div>
          <p className="fs-3 text-spacing font-600">Any Needs</p>
          <p className="text-color">+000(111)22233</p>
        </div>
      </div>
      <div className="d-flex">
        <div>
          <IoChatbubblesOutline size="60" className="mt-1" color="#7dba2f" />
        </div>
        <div>
          <p className="fs-3 text-spacing font-600">Email Us</p>
          <p className="text-color">infomegahelp@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default EmailNavbar;
