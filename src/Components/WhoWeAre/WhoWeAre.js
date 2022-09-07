import React from "react";
import "./WhoWeAre.scss";
import whatwedo from "../.././assets/images/whatwedo.jpg";
import lovecustomers from "../.././assets/images/lovecustomers.jpg";
import safety from "../.././assets/images/safety.png";
import { FaLongArrowAltRight } from "react-icons/fa";

function WhoWeAre() {
  const data = [
    {
      img: whatwedo,
      need: "What We Do For You",
      text: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna Aliquam erat volutpat.Ut wisi enim ad minim veniam quis nostrud exerci",
    },
    {
      img: lovecustomers,
      need: "We Respect Clients",
      text: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna Aliquam erat volutpat.Ut wisi enim ad minim veniam quis nostrud exerci",
    },
    {
      img: safety,
      need: "We Safety Company",
      text: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna Aliquam erat volutpat.Ut wisi enim ad minim veniam quis nostrud exerci",
    },
  ];
  return (
    <div className="whowe">
      <div className="mt-5">
        <p className="font_30 text-center pt-5">
          WHO WE <span className="product-background">ARE</span>
        </p>
        <p className="consect-text text-center mt-2">
          Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
          ut laoreet dolore magna <br /> Aliquam erat volutpat.Ut wisi enim ad
          minim veniam quis nostrud exerci
        </p>
      </div>
      <div className="d-flex justify-content-evenly padding-around mt-5">
        {data.map((item) => (
          <div>
            <img
              src={item.img}
              className="img-border shadow p-2"
              alt="img"
              height="200px"
            />
            <div className="need-text text-center mt-3">{item.need}</div>
            <div className="text-center text-color mt-3">{item.text}</div>
            <p className="text-center readmore fw-bold ">
              Read more
              <FaLongArrowAltRight color="#82bc39" className="ms-2" />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhoWeAre;
