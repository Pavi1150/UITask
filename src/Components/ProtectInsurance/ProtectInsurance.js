import React from "react";
import "./ProtectInsurance.scss";
import { IoIosSend } from "react-icons/io";
import { GoPrimitiveSquare } from "react-icons/go";

function ProtectInsurance() {
  return (
    <div>
      <div className="baby-background">
        <div className="d-flex flex-column align-items-center justify-content-center h-100">
          <p className="text-center d-flex justify-content-center fw-bold text-white protect-font">
            Protect Your
            <br />
            Family With Insurance
          </p>
          <p className="text-center d-flex justify-content-center text-white fs-5">
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet <br />
            dolore magna Aliquam erat volutpat.Ut wisi enim ad minim veniam quis
            nostrud exerci
          </p>
          <div className="d-flex justify-content-center">
            <p className="d-flex justify-content-center text-white learn-box mt-5">
              LEARN MORE
              <IoIosSend className="mt-1 ms-2" />
            </p>
          </div>
          <div className="d-flex justify-content-center mt-4">
            <GoPrimitiveSquare color="white" />
            <GoPrimitiveSquare color="white" />
            <GoPrimitiveSquare color="white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProtectInsurance;
