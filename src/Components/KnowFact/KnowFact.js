import React from "react";
import "./KnowFact.scss";
import { IoIosSend } from "react-icons/io";

function KnowFact() {
  return (
    <div className="position-relative">
      <div className="line"></div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="knowFactPage text-white">
          <h3 className="fw-bold">know about our fact</h3>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna Aliquam erat
            volutpat.Ut wisi enim ad minim veniam quis nostrud exerci
          </p>
          <div className="">
            <p className="d-flex justify-content-center text-white learn-box mt-3">
              LEARN MORE
              <IoIosSend className="mt-1 ms-2" />
            </p>
          </div>
        </div>
        <div className="enjoy-image blue-gradient-rgba"></div>
      </div>
    </div>
  );
}

export default KnowFact;
