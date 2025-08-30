"use client";
import { useSelector } from "react-redux";
import parse from "html-react-parser";
import { BASE_URL } from "@/config/config";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

const GalleryGridContent = ({ galleryImages }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const imageWidth = galleryImages.length === 1 ? "100%" : "49.2%";

// console.log(galleryImages)
    const handleOpenModal = (index) => {
      setSlideNumber(index);
      setOpenModal(true);
    };

    // Close Modal
    const handleCloseModal = () => {
      setOpenModal(false);
    };

    // Previous Image
    const prevSlide = () => {
      slideNumber === 0
        ? setSlideNumber(galleryImages.length - 1)
        : setSlideNumber(slideNumber - 1);
    };

    // Next Image
    const nextSlide = () => {
      slideNumber + 1 === galleryImages.length
        ? setSlideNumber(0)
        : setSlideNumber(slideNumber + 1);
    };

  let gridStyle = `grid-rows-${Math.ceil(galleryImages.length / 3)}`;
  return (
    <div id="gallery" className="marginTop">
      {openModal && (
        <div className="sliderWrap">
          <div className="sliderWrap_contnet relative">
            <FontAwesomeIcon
              size="2x"
              icon={faCircleXmark}
              className="btnClose"
              onClick={handleCloseModal}
            />
            <FontAwesomeIcon
              size="2x"
              icon={faCircleChevronLeft}
              className="btnPrev"
              onClick={prevSlide}
            />
            <FontAwesomeIcon
              size="2x"
              icon={faCircleChevronRight}
              className="btnNext"
              onClick={nextSlide}
            />
            <div className="gallary-modal-img flex justify-center  mx-auto">
              <img
                src={`${BASE_URL()}${
                  galleryImages[slideNumber].album_pic.original_url
                }`}
                alt=""
              />
            </div>
          </div>
        </div>
      )}
      <div className="containar">
        <div
          className={`grid grid-flow-row-dense ${gridStyle} grid-cols-4 gap-4`}
        >
          {galleryImages.map((value, index) => {
            let j = index + 1;
            if (
              index === 0 ||
              (index % 3 === 0 && index % 2 === 0) ||
              (j % 3 === 0 && j % 2 === 0)
            ) {
              return (
                <div key={index} className="row-span-1 col-span-2 ">
                  <img
                    src={BASE_URL() + value?.album_pic?.original_url}
                    onClick={() => handleOpenModal(index)}
                    alt=""
                    className="object-fill w-full h-full max-h-[511px] "
                    style={{ objectFit: "cover" }}
                  />
                </div>
              );
            } else {
              return (
                <div key={index} className="row-span-1 col-span-1 ">
                  <img
                    src={BASE_URL() + value?.album_pic?.original_url}
                     onClick={() => handleOpenModal(index)}
                    alt=""
                    className="object-fill w-full max-h-[512px] h-full"
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default GalleryGridContent;
