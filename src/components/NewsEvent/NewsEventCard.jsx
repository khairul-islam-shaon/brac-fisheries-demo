import React from 'react'
import useIcon from "../../../public/icons/user.svg"
import moment from "moment";
import {Button} from "@/components/Button/Button";
import vectorImage from "../../../public/icons/VectorButton.svg";
import {useSelector} from "react-redux";
import parse from "html-react-parser";
import {BASE_URL} from "@/config/config";
const NewsEventCard = ({card}) => {
    const { Language } = useSelector((state) => state);
    let date
    if (Language.data !== "EN") {
        moment.locale("bn-bd");
        date = moment(card?.start_date).format("DD MMM"); // Format date for Bengali locale
    } else {
        moment.locale("en"); // Set the default locale to English (or any other desired default)
        date = moment(card?.start_date).format("DD MMM"); // Format date for English localea
    }
  

    return (
      <>
        <section className="our-news-card">
          <div
            className="bg-image"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0.04%, rgba(0, 0, 0, 0.72) 84.35%), url(${
                BASE_URL() + card?.files[0]?.media_content?.original_url
              })`,

              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="bg-white date h-[60px] text-center flex items-center justify-center text-pink  rounded-full absolute top-10">
              <h5 className=" text-[#1C486B] w-[40px]">{date}</h5>
            </div>
          </div>
          <div
            className="bg-white border rounded-tl-[31px] rounded-tr-[34px] rounded-bl-[30px] rounded-br-[30px] px-10 py-7   absolute
         shadow card"
          >
            <div className="flex items-center gap-2 mb-4">
              <img className="user-icon" src={useIcon.src} alt="" />
              {Language?.data === "EN"
                ? card?.organised_by
                : card?.event_language[0]?.organised_by}
            </div>
            <h3 className="text-2xl font-bold mb-3.5  text-gray_3">
              {Language?.data === "EN"
                ? card?.title
                : card?.event_language[0]?.title}
            </h3>
            <div className="mb-5 text-gray_4 font-normal news-card-description">
              {Language?.data === "EN" ? (
                parse(card?.description)
              ) : (
                <>
                  {card.event_language.length > 0 &&
                    parse(card?.event_language[0]?.description)}
                </>
              )}
            </div>
            <div className="group">
              <Button
                className={
                  "flex justify-center items-center gap-5  !text-white  !bg-[#1C486B] group-hover:!bg-white group-hover:!text-[#1C486B] group-hover:border group-hover:border-[#1C486B] news-btn"
                }
                slug={card.slug}
              >
                {Language?.data === "EN" ? "Read More" : "আরও পড়ুন"}
                <img
                  src={vectorImage.src}
                  alt=""
                  className="group-hover:bg-[#1C486B] group-hover:rounded-full"
                />
              </Button>
            </div>
          </div>
        </section>
      </>
    );
}

export default NewsEventCard