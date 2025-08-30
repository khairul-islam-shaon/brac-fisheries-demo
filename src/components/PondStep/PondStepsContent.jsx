"use client";

import Header from "../ui/Header";
import tempLogo from "../../../public/cloud-sun-02.svg";
import { BASE_URL } from "@/config/config";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
const PondStepsContent = ({ component, details }) => {
  const { Language } = useSelector((state) => state);
  // console.log(component);

  const { title, component_languages, master_crud_languages } = component;

  
  return (
    <div className="containar marginTop  overflow-hidden">
      {/* <Header>{title}</Header> */}
      {/* <Header>{title ? title : ""}</Header> */}
      <Header>
        {" "}
        {Language.data === "EN" ? (
          title
        ) : (
          <>{component_languages.length > 0 && component_languages[0].title}</>
        )}
      </Header>

      {/* <ProductCategorySlider data={details} /> */}

      <div className="pond-steps flex flex-wrap justify-center mt-[50px] gap-x-[30px] gap-y-[40px]">
        {details?.map((card) => {
          // console.log(card);
          return (
            <div
              key={card.id}
              className="pond-step-card lg:w-[360px] h-[345px] text-center flex flex-col gap-12 p-5 shadow-lg"
            >
              <img
                src={
                  card.files
                    ? `${BASE_URL()}/${
                        card?.files[0]?.media_content?.original_url
                      }`
                    : ""
                }
                alt=""
                className="w-[80x] h-[80px] object-contain"
              />
              {/* <div className="step-text">{parse(card.description)}</div> */}
              <div className="step-text">
                {" "}
                {Language.data === "EN" ? (
                  parse(card?.description)
                ) : (
                  <>
                    {card?.master_crud_languages.length > 0 &&
                      parse(card?.master_crud_languages[0]?.description)}
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PondStepsContent;
