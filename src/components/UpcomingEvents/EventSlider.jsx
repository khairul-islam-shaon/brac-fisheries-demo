"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Event from "@/components/UpcomingEvents/Event";
import NewsEventCard from "@/components/NewsEvent/NewsEventCard";
const EventSlider = ({data}) => {

  // console.log(data)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
  const renderSlides = () =>
      data?.data?.map((card) => <Event key={card.id} card={card} />);

  return (
    <div className="event-slider">
      <Slider {...settings}>{renderSlides()}</Slider>
    </div>
  );
};

export default EventSlider;
