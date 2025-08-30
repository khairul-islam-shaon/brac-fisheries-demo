'use client'
import React from 'react'
import {CiSaveDown2} from "react-icons/ci";
import {useSelector} from "react-redux";
import {BASE_URL} from "@/config/config";
import parse from "html-react-parser";
import Link from "next/link";

const OurCompanyBrochureCard = ({card}) => {
    const { Language } = useSelector((state) => state);

    // const { img, title, description } = card;
    return (
        <>
            <section className="company_brochure-card">
                <div
                    className="bg-image"
                    style={{
                        backgroundImage: `url(${BASE_URL()+card?.files[0]?.media_content?.original_url})`,

                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                >

                </div>
                <div
                    className="bg-white border rounded-tl-[31px] rounded-tr-[34px] rounded-bl-[30px] rounded-br-[30px] px-10 py-7 absolute shadow-lg card"
                >
                    <h3 className="text-2xl font-bold mb-3.5  text-gray_3">{Language.data === "EN" ? card?.title : card?.master_crud_languages[0]?.title}</h3>
                    <p className="mb-5 text-gray_4 font-normal">{Language.data === "EN" ? parse(card?.description) : parse(card?.master_crud_languages[0]?.description)}</p>
                    <Link href={BASE_URL()+card?.files[1]?.media_content?.original_url} className="button-primary-download flex items-center gap-[10px]" target="_blank" style={{borderRadius:"16px"}}>{Language.data === "EN" ? "Download" : "ডাউনলোড"} <CiSaveDown2 /></Link>
                </div>
            </section>
        </>
    );
}

export default OurCompanyBrochureCard