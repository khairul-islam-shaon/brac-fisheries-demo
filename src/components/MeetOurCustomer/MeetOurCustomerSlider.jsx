"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


import { useSelector } from "react-redux";
import { VideoCardMeetOurCustomer } from "./VideoCard";
import Header from "../ui/Header";
const MeetOurCustomerSlider = ({
  component: { title, component_languages },
  details,
}) => {
  const { Language } = useSelector((state) => state);
  
  const lang = Language.data;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
    details.map((card) => (
      <VideoCardMeetOurCustomer key={card.id} card={card} lang={lang} />
    ));

   
  return (
    <section
      className={`meet-our-customer containar  mt-[40px] overflow-hidden ${
        lang == "bn" && "font-SolaimanLipi"
      }`}
    >
      <div className="meet-our-customer-header">
        <Header>{lang == "bn" ? component_languages[0]?.title : title}</Header>
      </div>

      <div className="our-customer-slide-container lg:px-5 md:px-8">
        <Slider className="" {...settings}>
          {renderSlides()}
        </Slider>
      </div>
    </section>
  );
};

export default MeetOurCustomerSlider;
