"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import Link from "next/link";
import CategoryCard from "./CategoryCard";
import fish from "../../../public/fish.png";
import { useState } from "react";
import arrow from "../../../public/downarrow.svg";
import parse from "html-react-parser";
const ProductCategorySlider = ({ data }) => {
  const { Language } = useSelector((state) => state);
  const [show, setShow] = useState(false);
  const [details, setDetails] = useState(null);

  // console.log(details);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // console.log(data)

  const renderSlides = () =>
    data?.map((card) => (
      <CategoryCard
        key={card.id}
        card={card}
        setShow={setShow}
        setDetails={setDetails}
        show={show}
        details={details}
        cardLength = {data.length}
      />
    ));
  return (
    <div className="mt-10">
      {/* <Slider {...settings}>{renderSlides()}</Slider> */}
    <div className="flex flex-col  md:flex-row gap-0 space-y-4">
      {renderSlides()}
    </div>
      {show && details && (
        <div className={`${show ? "show" : ""}`}>
          <div className="flex justify-center my-10">
            <img className="" src={arrow.src} alt="" />
          </div>
          <div className="product-details">
            <h1>
              {" "}
              {Language.data === "EN"
                ? details?.title
                : details?.master_crud_languages[0]?.title}
            </h1>
            {/* <div>{parse(details?.description)}</div> */}

            <div>
              {Language.data == "BN" ? (
                <>
                  {details?.master_crud_languages.length > 0 &&
                    parse(details?.master_crud_languages[0]?.description)}
                </>
              ) : (
                parse(details?.description)
              )}
            </div>
            {/* <div className="items">
              {details.children.map((item, index) => (
                <p className="item" key={index}>
                  {item.name}
                </p>
              ))}
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCategorySlider;
