"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {TopCarousel} from "@/components/Cards/Cards";


const CarouselSlider = ({details}) => {
// console.log(details)
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 60000,
    pauseOnHover: false,
    adaptiveHeight: true,
    arrows: false,
  };
  const renderSlides = () =>
      details?.map((card) => <TopCarousel key={card.id} card={card} />)
  return (
    <section className="carousel ">
     
       <Slider {...settings}>{renderSlides()}</Slider>
    </section>
  );
};

export default CarouselSlider;
