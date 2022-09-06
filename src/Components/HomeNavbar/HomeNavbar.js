import React from "react";
import "./HomeNavbar.scss";
import { BsSearch } from "react-icons/bs";
import { IoIosSend } from "react-icons/io";

function HomeNavbar() {
  return (
    <div className="home-nav d-flex justify-content-around align-items-center">
      <div className="d-flex justify-content-around text-white home-width">
        <p>Home</p>
        <p>About Us</p>
        <p>Insurance Product</p>
        <p>News</p>
        <p>Pages</p>
        <p>Contact Us</p>
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
