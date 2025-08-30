"use client";

import { useState } from "react";
import brandLogo from "../../../public/images/Footer/brandLogo.svg";

import arrowIcons from "../../../public/icons/nav-arrow.svg";
import phoneicon from "../../../public/icons/phone-nav.svg";
import img from "../../../public/images/demo_nav_image.png";
import Link from "next/link";
import cn from "@/lib/cn";
import { useDispatch, useSelector } from "react-redux";
import { fetch_language } from "@/redux";
import { BASE_URL } from "@/config/config";

const Navbar = ({ navData }) => {
  const [state, setState] = useState(false);
  const [langId, setLangId] = useState();
  const { Language } = useSelector((state) => state);
  const dispatch = useDispatch();
  // console.log(Language)

  const handleLanguageChange = (value) => {
    if (value) {
      dispatch(fetch_language(value));
    }
  };

  

  return (
    <nav
      className={`border-b w-full md:static md:text-sm md:border-none ${
        Language.data == "BN" && "font-SolaimanLipi"
      }`}
    >
      <div className="flex justify-end">
        <div className="lang-bg">
          <div className=" lang-container  flex items-center justify-end">
            <div className="lang    md:gap-20 gap-5">
              <div className="flex items-center gap-1.5">
                <div className="flex items-center gap-2.5">
                  <img className="" src={phoneicon.src} alt="" />
                  <div className="flex text-white">
                    <p className="!font-normal color-red-400">
                      01730-374494fdfdfdf
                      <span className="font-normal"> (Sales),</span>
                    </p>
                    <p>
                      {" "}
                      01704-121086
                      <span className="font-normal"> (Queries)</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="btn flex divide-x hidden">
                <button
                  className={cn("bg-white text-black btn1", {
                    "text-white bg-secondary-color": Language.data != "BN",
                  })}
                  onClick={() => handleLanguageChange("EN")}
                >
                  ENG
                </button>
                <button
                  className={cn("bg-white text-black btn2", {
                    "text-white bg-secondary-color": Language.data == "BN",
                  })}
                  onClick={() => handleLanguageChange("BN")}
                >
                  বাংলা
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="items-center -mt-2  containar mx-auto md:flex ">
        <div className="flex items-center justify-between py-3 md:py-3 md:block">
          <Link href="/">
            <img
              className="brac-logo md:-mt-8 -mt-2"
              src={`${BASE_URL()}${navData[0]?.images?.original_url}`}
              width={120}
              height={50}
              alt="Brac Fish"
            />
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-500 hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="containr justify-end items-center gap-4 relative md:flex ">
            {navData
              ?.filter((item) => item.title != "Home")
              .map((item) => {
                return (
                  <li key={item.id} className="navbar-menu  ">
                    {item.child && item.child?.length > 0 ? (
                      <div className="flex items-center gap-2.5 uppercase">
                        {Language?.data == "EN"
                          ? item.title
                          : item?.menu_language[0]?.title}
                        {item.child && item.child?.length > 0 && (
                          <div className="arrow-container relative">
                            <img
                              src={arrowIcons.src}
                              alt="arrow icon"
                              className="arrow"
                            />
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item?.link ? `${item.link}` : "#"}
                        className="flex items-center gap-2.5 uppercase"
                        onClick={() => setState(!state)}
                      >
                        {Language?.data == "EN"
                          ? item.title
                          : item?.menu_language[0]?.title}
                        {item.child && item.child?.length > 0 && (
                          <img
                            src={arrowIcons.src}
                            alt="arrow icon"
                            className="arrow"
                          />
                        )}
                      </Link>
                    )}
                    {item.child && item.child?.length > 0 && (
                      <>
                        <div className="navbarmenu-child">
                          <h4>
                            {Language?.data == "EN"
                              ? item.title
                              : item?.menu_language[0]?.title}
                          </h4>

                          <div className=" grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5  ">
                            {item.child.map((item) => {
                              return (
                                <div
                                  className="navbarmenu-child-item "
                                  key={item}
                                  onClick={() => setState(!state)}
                                >
                                  <Link
                                    href={`${item.link}`}
                                    className="flex gap-2.5 uppercase"
                                  >
                                    <img
                                      className="md:block"
                                      //   src={`${process.env.BASE_URL}/${item.image}`}
                                      // src={item.image.src}
                                      src={`${BASE_URL()}${
                                        item?.images?.original_url
                                      }`}
                                      width={47}
                                      height={43}
                                      alt=""
                                    />
                                    <div className="lg:w-3/4">
                                      <h5>
                                        {Language?.data == "EN"
                                          ? item.title
                                          : item?.menu_language[0]?.title}
                                      </h5>
                                      <p>
                                        {Language?.data == "EN"
                                          ? item.description
                                          : item?.menu_language[0]?.description}
                                      </p>
                                    </div>
                                  </Link>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </>
                    )}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
