import React from "react";
import "./Footer.scss";
import { IoIosSend } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";
import whatwedo from "../.././assets/images/whatwedo.jpg";
import lovecustomers from "../.././assets/images/lovecustomers.jpg";
import safety from "../.././assets/images/safety.png";
import {
  TiSocialFacebook,
  TiSocialSkype,
  TiSocialPinterest,
  TiSocialTwitter,
} from "react-icons/ti";

function Footer() {
  return (
    <div>
      <div className="footer d-flex justify-content-center justify-content-around align-items-center text-white">
        <div className="d-flex justify-content-center align-items-center footer-width">
          <div>
            <p className="klaritasText greyColor">
              Klaritas est etiam processu sequitur mutuation consuetudium
              lectorum mirum est notare quam littera hum sdecima Eodem modo
              typi.
            </p>
            <p className="mt-3 subscribeText">Subscribe To Our Newsletter</p>
            <input
              type="text"
              placeholder="Your email"
              className="mt-2 inputBorder"
            />
            <IoIosSend size="10px" className="send" color="ffffff" />
          </div>
          <div>
            <p className="h3">Information</p>
            <div className="greyColor">
              <p className="mt-2">
                <FaLongArrowAltRight />
                HOME
              </p>
              <p className="mt-2">
                <FaLongArrowAltRight />
                ABOUT US
              </p>
              <p className="mt-2">
                <FaLongArrowAltRight />
                PRODUCT
              </p>
              <p className="mt-2">
                <FaLongArrowAltRight />
                INFORMATION
              </p>
              <p className="mt-2">
                <FaLongArrowAltRight />
                BLOG & NEWS
              </p>
              <p className="mt-2">
                <FaLongArrowAltRight />
                CONTACT US
              </p>
            </div>
          </div>
          <div className="recentPost mt-5 ms-3">
            <p className="h3 mt-3">Recent Post</p>
            <div className="d-flex greyColor">
              <div>
                <img src={whatwedo} className="gridImages" alt="grid" />
              </div>
              <div className="ms-3">
                <p>Completely synergize resource sucking relationships</p>
                <p>3 minutes ago</p>
              </div>
            </div>
            <div className="d-flex greyColor mt-3">
              <div>
                <img src={lovecustomers} className="gridImages" alt="grid" />
              </div>
              <div className="ms-3">
                <p>Completely synergize resource sucking relationships</p>
                <p>3 minutes ago</p>
              </div>
            </div>
            <div className="d-flex greyColor mt-3">
              <div>
                <img src={safety} className="gridImages" alt="grid" />
              </div>
              <div className="ms-3">
                <p>Completely synergize resource sucking relationships</p>
                <p>3 minutes ago</p>
              </div>
            </div>
          </div>
          <div className="h3 mt-4">
            <p>Instagram</p>
            <div className="d-flex mt-2">
              <img src={whatwedo} className="gridImages" alt="grid" />
              <img src={lovecustomers} className="gridImages" alt="grid" />
              <img src={safety} className="gridImages" alt="grid" />
            </div>
            <div className="d-flex">
              <img src={safety} className="gridImages" alt="grid" />
              <img src={lovecustomers} className="gridImages" alt="grid" />
              <img src={whatwedo} className="gridImages" alt="grid" />
            </div>
            <div className="d-flex">
              <img src={whatwedo} className="gridImages" alt="grid" />
              <img src={safety} className="gridImages" alt="grid" />
              <img src={lovecustomers} className="gridImages" alt="grid" />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-around rightsText">
        <p className="">All rights reserved @ Designed by DesignLight</p>
        <p>
          <TiSocialFacebook />
          <TiSocialSkype />
          <TiSocialPinterest />
          <TiSocialTwitter />
        </p>
      </div>
    </div>
  );
}

export default Footer;
