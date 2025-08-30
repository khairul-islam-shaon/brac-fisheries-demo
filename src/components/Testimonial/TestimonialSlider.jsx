"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialContent from "@/components/Testimonial/TestimonialContent";

const TestimonialSlider = ({cards}) =>{

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 6000,
        pauseOnHover: false,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
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
        // centerPadding:"50px"
    };


    const renderSlides = () =>
        cards.map((card) => <TestimonialContent key={card.id} card={card} />);
    return (
        <div className="testimonial_slider">
            <Slider {...settings}>{renderSlides()}</Slider>
        </div>
    );
}

export default TestimonialSlider