import React from "react";
import "./LatestNews.scss";
import whatwedo from "../.././assets/images/whatwedo.jpg";
import lovecustomers from "../.././assets/images/lovecustomers.jpg";
import safety from "../.././assets/images/safety.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

function LatestNews() {
  const data = [
    {
      img: whatwedo,
      date: "20 Sep",
      need: "Sorem Ipsum dolor site nec amet consect adipisci ",
      text: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed diam nonummy ni euismod tinc",
      read: "Read more",
    },
    {
      img: lovecustomers,
      date: "20 Sep",
      need: "Sorem Ipsum dolor site nec amet consect adipisci",
      text: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed diam nonummy ni euismod tinc",
      read: "Read more",
    },
    {
      img: safety,
      date: "20 Sep",
      need: "Sorem Ipsum dolor site nec amet consect adipisci",
      text: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed diam nonummy ni euismod tinc",
      read: "Read more",
    },
    {
      img: whatwedo,
      date: "20 Sep",
      need: "Sorem Ipsum dolor site nec amet consect adipisci ",
      text: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed diam nonummy ni euismod tinc",
      read: "Read more",
    },
    {
      img: lovecustomers,
      date: "20 Sep",
      need: "Sorem Ipsum dolor site nec amet consect adipisci",
      text: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed diam nonummy ni euismod tinc",
      read: "Read more",
    },
    {
      img: safety,
      date: "20 Sep",
      need: "Sorem Ipsum dolor site nec amet consect adipisci",
      text: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed diam nonummy ni euismod tinc",
      read: "Read more",
    },
    {
      img: whatwedo,
      date: "20 Sep",
      need: "Sorem Ipsum dolor site nec amet consect adipisci ",
      text: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed diam nonummy ni euismod tinc",
      read: "Read more",
    },
    {
      img: lovecustomers,
      date: "20 Sep",
      need: "Sorem Ipsum dolor site nec amet consect adipisci",
      text: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed diam nonummy ni euismod tinc",
      read: "Read more",
    },
    {
      img: safety,
      date: "20 Sep",
      need: "Sorem Ipsum dolor site nec amet consect adipisci",
      text: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed diam nonummy ni euismod tinc",
      read: "Read more",
    },
  ];
  const sliderOptions = {
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      400: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 2,
      },
      750: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  };
  return (
    <div className="latestNews ">
      <div className="mt-5 ">
        <p className="font_30 text-center">
          OUR LATEST <span className="product-background">NEWS</span>
        </p>
        <p className="consect-text text-center mt-2">
          Consectetuer adipiscing elit, sed dim nonummy nibh euismod tincidunt
          ut laoreet dolore magna <br /> Aliquam erat volutpat.Ut wisi enim ad
          minim veniam quis nostrud exerci
        </p>
        <div className="d-flex justify-content-center swipe">
          <Swiper className="latestSwiper" {...sliderOptions}>
            {data.map((item) => (
              <SwiperSlide>
                <div className="total">
                  <img src={item.img} alt="img" className="latestImages" />
                  <div className="d-flex">
                    <div className="sep-text d-flex align-items-center mt-2">
                      {item.date}
                    </div>
                    <div className="sorem-text fw-bold ms-4">{item.need}</div>
                  </div>
                  <div className="lorem-text">{item.text}</div>
                  <div className="fw-bold">
                    {item.read}
                    <FaLongArrowAltRight className="ms-2" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default LatestNews;
