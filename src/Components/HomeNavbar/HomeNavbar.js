import React from "react";
import "./HomeNavbar.scss";
import { BsSearch } from "react-icons/bs";
import { IoIosSend } from "react-icons/io";

function HomeNavbar() {
  return (
    <div className="home-nav d-flex justify-content-around align-items-center">
      <div className="d-flex justify-content-around home-width">
        <p className="navsComponents">Home</p>
        <p className="navsComponents">About Us</p>
        <p className="navsComponents">Insurance Product</p>
        <p className="navsComponents">News</p>
        <p className="navsComponents">Pages</p>
        <p className="navsComponents">Contact Us</p>
        <BsSearch size="30" className="pt-0" />
      </div>
      <div>
        <p className="text-white GetQuoteBackground">
          GET QUOTE
          <IoIosSend className="ps-1" size="20px" />
        </p>
      </div>
    </div>
  );
}

export default HomeNavbar;
