"use client";

import { useState } from "react";
import arrow from "../../../public/arrow.svg";
import { set } from "react-hook-form";
import { BASE_URL } from "@/config/config";
import { useSelector } from "react-redux";
const CategoryCard = ({
  card,
  show,
  setShow,
  setDetails,
  details,
  cardLength,
}) => {
  // console.log(card)
  // console.log(details)

const cardWidth = cardLength > 4 ? "lg:w-1/4" : `lg:w-${12 / cardLength}/12`;
const fourCard = "w-full sm:w-full md:w-1/3 lg:w-1/4"
const threeCard = "w-full sm:w-full md:w-1/3 lg:1/3"

const twoCard = "w-full sm:w-full md:w-1/2 "

// Ensure Tailwind can detect the classes:
const cardClass = `w-full sm:w-full md:w-1/3 ${cardWidth}`;
  const { Language } = useSelector((state) => state);
  const handleDetails = () => {
    // Toggle if the clicked card is already open
    if (details?.id === card.id) {
      setShow(!show);
      if (!show) {
        setDetails(card); // Open the details for this card
      } else {
        setDetails(null); // Close the details
      }
    } else {
      // Open a different card and ensure others are collapsed
      setShow(true);
      setDetails(card);
    }
  };
  // console.log(details?.id == card.id && "rotate-180");

  // console.log(cardLength, cardWidth);
  return (
    <div
      className={`flex-shrink-0 !mt-0 category-card  ${
        cardLength > 3 ? fourCard : threeCard
      }`}
    >
      <div className="flex justify-center">
        <img
          className="card-img  !w-11/12 mx-auto"
          src={
            card.files
              ? BASE_URL() + card?.files[0]?.media_content?.original_url
              : BASE_URL() + card?.media_content?.original_url
          }
          alt={card.name}
        />
      </div>
      <div className="title  flex justify-between md:!bottom-[10%]" onClick={handleDetails}>
        <>
          {card.name ? (
            <>
              {Language.data === "EN" ? (
                card?.name
              ) : (
                <>{card?.term_language.length > 0 && card.term_language[0].name}</>
              )}
            </>
          ) : (
            <>
              {Language.data == "EN" ? (
                card?.title
              ) : (
                <>
                  {card?.master_crud_languages ? (
                    <>
                      {card?.master_crud_languages.length > 0 &&
                        card.master_crud_languages[0].title}
                    </>
                  ) : (
                    <>
                      {card?.master_crud_languages.length > 0 &&
                        card.master_crud_languages[0].title}
                    </>
                  )}
                </>
              )}
            </>
          )}
        </>

        <img
          className={
            details?.id === card.id && show ? "rotate-180 icon" : "icon"
          }
          src={arrow.src}
          alt=""
        />
      </div>
    </div>
  );
};

export default CategoryCard;
