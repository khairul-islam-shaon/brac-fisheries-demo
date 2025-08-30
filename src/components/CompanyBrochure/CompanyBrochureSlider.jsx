"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OurCompanyBrochureCard from "./OurCompanyBrochureCard";
const CompanyBrochureSlider = ({cards}) => {

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
        cards.map((card) => <OurCompanyBrochureCard key={card.id} card={card} />);
    return (
        <div className="company_brochure_slider mt-10">
            <Slider {...settings}>{renderSlides()}</Slider>
        </div>
    );
};

export default CompanyBrochureSlider;

