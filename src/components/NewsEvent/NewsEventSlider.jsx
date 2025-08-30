"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewsEventCard from "./NewsEventCard";
import {useSelector} from "react-redux";
import Link from "next/link";
const NewsEventSlider = ({ eventData, component }) => {
  const { Language } = useSelector((state) => state);
  // console.log(eventData);
  const settings = {
    // dots: true,
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
    // centerPadding:"50px"
  };

  const renderSlides = () =>
    eventData?.data?.map((card) => <NewsEventCard key={card.id} card={card} />);
  return (
    <div className="our_news_slider mt-10">
      <Slider {...settings}>{renderSlides()}</Slider>
      <div className="flex justify-end">
        <Link href={component?.page_details?.slug}>
          <button
            className="button-primary  hover:!text-[#1C486B] !text-white  !bg-[#1C486B]  hover:!bg-white  hover:border  hover:border-[#1C486B]"
            style={{ borderRadius: "16px" }}
          >
            {" "}
            {Language.data === "EN" ? "Show all" : "সব দেখান"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NewsEventSlider;
