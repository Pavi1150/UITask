import React from "react";
import "./InsuranceProduct.scss";
import hand from "../../assets/images/hand.jpg";
import { TbMinusVertical } from "react-icons/tb";

function InsuranceProduct() {
  return (
    <div>
      <div className="mt-5">
        <p className="font_30 text-center">
          OUR INSURANCE <span className="product-background">PRODUCT</span>
        </p>
        <p className="consect-text text-center mt-2">
          Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
          ut laoreet dolore magna <br /> Aliquam erat volutpat.Ut wisi enim ad
          minim veniam quis nostrud exerci
        </p>
      </div>
      <div className="d-flex justify-content-around mt-5 position-relative">
        <div>
          <p>
            <span className="weprovideColor"> We Provide </span>
            <br />
            <span className="bestServiceColor">
              Best Services
              <hr className="w-50 border-thickness" />
            </span>
          </p>

          <p className="fw-bold">Life Insurance</p>

          <p className="InsuranceTextsColor">Fire Insurance</p>
          <p className="InsuranceTextsColor">Transport Insurance</p>
          <p className="InsuranceTextsColor">Health Insurance</p>
          <p className="InsuranceTextsColor">Buisness Insurance</p>
          <p className="InsuranceTextsColor">House Insurance</p>
        </div>

        <div className="balcony-image">
          <span className="border-move"></span>
          <img src={hand} className="family-image" alt="family" />
        </div>
        <div>
          <div>
            <TbMinusVertical color="#bababa" size="40px" />
          </div>
          <div>
            <TbMinusVertical color="#7dba2f" size="40px" height="50px" />
          </div>
          <div>
            <TbMinusVertical color="#bababa" size="40px" />
          </div>
          <div>
            <TbMinusVertical color="#bababa" size="40px" />
          </div>
          <div>
            <TbMinusVertical color="#bababa" size="40px" />
          </div>
          <div>
            <TbMinusVertical color="#bababa" size="40px" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InsuranceProduct;
