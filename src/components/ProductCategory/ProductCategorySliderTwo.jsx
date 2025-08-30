"use client";
import { useSelector } from "react-redux";
import Slider from "react-slick/lib/slider";
import CategoryCard from "./CategoryCard";
import { useState } from "react";
import fish from "../../../public/fish.png";
import OurProductContent from "../OurProducts/OurProductContent";
import OurProductSlider from "../OurProducts/OurProductSlider";
import SubSlider from "./SubSlider";
import arrow from "../../../public/downarrow.svg";

const ProductCategorySliderTwo = ({data}) => {
  const { Language } = useSelector((state) => state);
  const [show, setShow] = useState(false);
  const [details, setDetails] = useState(null);
  // console.log(details)

// console.log(data)

// const gridCol = `sm:grid-cols-2 grid-cols-1 ${
//   data.length > 4 ? "lg:grid-cols-4" : `lg:grid-cols-${data.length}`
// }`;

// console.log(gridCol)
  const settings = {
    infinite: data && data.length > 1 ? true : false,
    speed: 500,
    slidesToShow: data && data.length > 1 ? 2 : 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: data && data.length > 1 ? 2 : 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: data && data.length > 1 ? 2 : 1,
          slidesToScroll: 1,
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

    // console.log(data)
  return (
    <div>
      <div className={`${data.length > 2 && "our_products_slider"} mt-10`}>
        {/* <Slider {...settings}>{renderSlides()}</Slider> */}
        <div className={`flex flex-wrap justify-center  `}>
          {renderSlides()}
        </div>
        {show && details && (
          <>
            <div className="flex justify-center my-10">
              <img className="" src={arrow.src} alt="" />
            </div>
            <div id="our_products" className="!bg-none">
              {/* <OurProductSlider products={details.details} /> */}
              <SubSlider products={details.master_children_details} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCategorySliderTwo;
