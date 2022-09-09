import React from "react";
import man from "../../assets/images/man.jpg";
import { AiFillStar } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.scss";
import { Navigation, Pagination } from "swiper";

function Slider() {
  const pagination = {
    clickable: true,
  };
  const data = [
    {
      name: "Adam Smith",
      role: "founder",
      text: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna Aliquamerat volutpat Ut wisi",
    },
    {
      name: " Smith",
      role: "founder",
      text: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna Aliquamerat volutpat Ut wisi",
    },
    {
      name: "Adam Smith",
      role: "founder",
      text: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna Aliquamerat volutpat Ut wisi",
    },
  ];
  return (
    <Swiper
      pagination={pagination}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="swiperr"
    >
      {data.map((item) => (
        <SwiperSlide>
          <div className="Slider d-flex justify-content-center position-relative mt-5">
            <div className="center-Content">
              <div className="d-flex justify-content-center">
                <img src={man} className="imgOne" alt="man" />
                <img src={man} alt="man" className="imgThree" />
                <img src={man} alt="man" className="imgTwo" />
              </div>

              <p className="name text-center mt-3">{item.name}</p>

              <p className="text-center mt-3 lorem-color">{item.text}</p>
              <div className="d-flex justify-content-center mt-3">
                <span className="name">Rating :</span>
                <span className="mt-0">
                  <AiFillStar color="#f9c201" />
                  <AiFillStar color="#f9c201" />
                  <AiFillStar color="#f9c201" />
                  <AiFillStar color="#f9c201" />
                  <AiFillStar color="#f9c201" />
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
