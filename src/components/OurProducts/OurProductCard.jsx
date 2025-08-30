'use client'
import React from 'react'
import { useSelector } from "react-redux";
import {BASE_URL} from "@/config/config";
import parse from "html-react-parser";
import Link from 'next/link';
const OurProductCard = ({card}) => {
    const { Language } = useSelector((state) => state);

   

  return (
    <>
      <section className="our-product-card our_products_slider">
        <div
          className="bg-image"
          style={{
            backgroundImage: `  linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0.04%, rgba(0, 0, 0, 0.72) 84.35%), url(${
              BASE_URL() + card?.files[0]?.media_content?.original_url
            })`,

            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="bg-white border rounded-tl-[31px] rounded-tr-[34px] rounded-bl-[30px] rounded-br-[30px] px-10 py-7   absolute 
         shadow-lg card"
        >
          <h3 className="text-2xl font-bold mb-3.5  text-gray_3">
            {Language?.data === "EN" ? (
              card?.name
            ) : (
              <>
                {card.post_language.length > 0 && card?.post_language[0]?.name}
              </>
            )}
          </h3>
          <div className="mb-5 text-gray_4 font-normal">
            {Language?.data === "EN" ? (
              <> {parse(card?.description)} </>
            ) : (
              <>
                {" "}
                {card?.post_language.length > 0 &&
                  parse(card?.post_language[0]?.description)}
              </>
            )}
          </div>
          <Link href={card?.slug ? card?.slug : "#"}>
            <button
              className="button-primary !bg-[#1c486b] hover:!bg-white !text-white hover:!text-[#1c486b] hover:border hover:border-[#1C486B]"
              style={{ borderRadius: "16px" }}
            >
              {Language?.data === "EN" ? "Learn More" : "আর ও জানুন"}
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default OurProductCard