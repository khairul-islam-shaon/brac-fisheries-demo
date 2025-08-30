"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../public/images/OurProducts/p2.png";
import img2 from "../../../public/images/OurProducts/ourProducts.png";
import img3 from "../../../public/images/OurProducts/p1.png";
import OurProductCard from "./OurProductCard";
const OurProductSlider = ({products}) => {
  // console.log(products)
   const settings = {
     // dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 3,
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
       products?.data.map((card) => <OurProductCard key={card.id} card={card} />);
  return (
    <div className="our_products_slider mt-10">
      <Slider {...settings}>{renderSlides()}</Slider>
    </div>
  );
};

export default OurProductSlider;
