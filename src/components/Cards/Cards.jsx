"use client";

import { Button } from "@/components/Button/Button";
import vectorImage from "../../../public/icons/VectorButton.svg";
import { BASE_URL } from "@/config/config";
import { useSelector } from "react-redux";
import parse from "html-react-parser";
import Link from "next/link";

export const TopCarousel = ({ card }) => {
  const { Language } = useSelector((state) => state);

// console.log(card)
// console.log(card);
  function getMediaType(url) {
    const extension = url.split(".").pop();
    switch (extension) {
      case "jpg":
      case "jpeg":
      case "png":
      case "gif":
        return "image";
      case "mp4":
      case "mov":
      case "avi":
        return "video";
      default:
        return "unknown";
    }
  }

let mediatype;
if(card.files.length > 0){
     mediatype = getMediaType(card?.files[0]?.media_content?.original_url);
}

 
  return (
    <section
      className="relative carousel-top max-h-[92vh] "
      style={{
        backgroundImage: `linear-gradient(181.38deg, rgba(0, 0, 0, 0) 1.16%, rgba(0, 0, 0, 0.0031) 1.17%, rgba(0, 0, 0, 0.2) 98.83%), url(${
          BASE_URL() + card?.files[0]?.media_content?.original_url
        })`,
        width: "100%",

        backgroundPosition: "center ",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {mediatype == "video" && (
        <video
          muted
          autoPlay
          playsInline
          loop
          preload="auto"
          id="myVideo1"
          style={{ width: "100%" }}
        >
          <source
            src={`${BASE_URL() + card?.files[0]?.media_content?.original_url}`}
            type="video/mp4"
          />
          Your browser does not support HTML5 video.
        </video>
      )}
      <div className="slider-caption flex items-center ">
        <div>
          <h2>
            {Language?.data === "EN"
              ? card?.title
              : card?.master_crud_languages[0]?.title}
          </h2>
          {card?.description != null && Language?.data === "EN" ? (
            parse(card?.description)
          ) : (
            <>
              {card.master_crud_languages.length > 0
                ? parse(card?.master_crud_languages[0]?.description)
                : ""}
            </>
          )}

          <div className="group">
            <Link href={card?.page_details?.slug}>
              <button
                className={
                  "md:ml-[54px] ml-7 flex justify-center items-center gap-2 group-hover:bg-white group-hover:text-[#1C486B]  btnClass button-primary   rounded-2xl text-xl leading-6 !bg-[#1C486B] !text-white  hover:!bg-white hover:!text-[#1C486B] lg:!max-w-[180px]  explore-btn"
                }
              >
                Explore Now
                <img
                  src={vectorImage.src}
                  alt=""
                  className="group-hover:bg-[#1C486B]   group-hover:rounded-full"
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
