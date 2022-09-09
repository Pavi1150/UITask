import React from "react";
import { IoIosSend } from "react-icons/io";
import { GoPrimitiveSquare } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./ProtectInsurance.scss";
import { Pagination } from "swiper";

function ProtectInsurance() {
  const pagination = {
    clickable: true,
  };
  return (
    <Swiper
      pagination={pagination}
      modules={[Pagination]}
      className="protectSwiper"
    >
      <SwiperSlide>
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
                dolore magna Aliquam erat volutpat.Ut wisi enim ad minim veniam
                quis nostrud exerci
              </p>
              <div className="d-flex justify-content-center">
                <p className="d-flex justify-content-center text-white learn-box mt-5">
                  LEARN MORE
                  <IoIosSend className="mt-1 ms-2" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
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
                dolore magna Aliquam erat volutpat.Ut wisi enim ad minim veniam
                quis nostrud exerci
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
      </SwiperSlide>
    </Swiper>
  );
}

export default ProtectInsurance;
