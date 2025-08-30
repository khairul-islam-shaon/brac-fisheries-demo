import React from "react";
import OurProductCard from "../OurProducts/OurProductCard";
import Slider from "react-slick/lib/slider";
import SubSliderCard from "./SubSliderCard";

const SubSlider = ({products}) => {
    // console.log(products)
  const settings = {
    // dots: true,
    infinite: products.length >3 ? true : false ,
    speed: 500,
    slidesToShow: products.length > 3 ? 3 : products.length,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
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
    // centerPadding:"50px"
  };


   const renderSlides = () =>
     products?.map((card) => <SubSliderCard key={card.id} card={card} length = {products?.length}/>);
  return (
    <div className="our_products_slider mt-10">
      <Slider {...settings}>{renderSlides()}</Slider>
    </div>
  );
};

export default SubSlider;
