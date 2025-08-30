"use client"

import { useSelector } from "react-redux";
import Header from "../ui/Header";
import { BASE_URL } from "@/config/config";
import parse from "html-react-parser";
const LeftFaqContent = ({ value, faqList }) => {
      const { Language } = useSelector((state) => state);
  return (
    <div id="LeftFaqWithImage" className="marginTop">
      <div className="containar">
        <Header>
          {Language.data === "EN"
            ? value.title
            : value?.component_languages[0]?.title}
        </Header>
        <div className="flex flex-col md:flex-row gap-6 pt-10">
          <div className="md:w-1/2">
            <div className="divide-y divide-black">
              {faqList.map((value, index) => {
                return (
                  <details key={index} className="group">
                    <summary className="flex justify-between items-center p-4 cursor-pointer">
                      {value?.title != null && (
                        <p className="font-[18px]">
                          {Language.data === "EN" ? (
                            parse(value?.title)?.props &&
                            parse(value?.title)?.props?.children &&
                            parse(value?.title).props.children.type ===
                              "code" ? (
                              parse(
                                parse(value?.title).props.children.props
                                  .children
                              )
                            ) : (
                              parse(value?.title)
                            )
                          ) : (
                            <>
                              {value?.master_crud_languages.length > 0 &&
                              parse(value?.master_crud_languages[0]?.title)
                                ?.props &&
                              parse(value?.master_crud_languages[0]?.title)
                                .props.children &&
                              parse(value?.master_crud_languages[0]?.title)
                                .props.children.type === "code" ? (
                                parse(
                                  parse(value?.master_crud_languages[0]?.title)
                                    .props.children.props.children
                                )
                              ) : (
                                <>
                                  {value?.master_crud_languages.length > 0 &&
                                    parse(
                                      value?.master_crud_languages[0]?.title
                                    )}
                                </>
                              )}
                            </>
                          )}
                        </p>
                      )}
                      <span className="transition group-open:rotate-180">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 14L6 8L18 8L12 14Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </summary>
                    <div className="p-4">
                      {value?.description != null && (
                        <div className="text-xs text-black">
                          {Language.data === "EN" ? (
                            parse(value?.description)?.props &&
                            parse(value?.description)?.props?.children &&
                            parse(value?.description).props.children.type ===
                              "code" ? (
                              parse(
                                parse(value?.description).props.children.props
                                  .children
                              )
                            ) : (
                              parse(value?.description)
                            )
                          ) : (
                            <>
                              {value?.master_crud_languages.length > 0 &&
                              parse(
                                value?.master_crud_languages[0]?.description
                              )?.props &&
                              parse(
                                value?.master_crud_languages[0]?.description
                              ).props.children &&
                              parse(
                                value?.master_crud_languages[0]?.description
                              ).props.children.type === "code" ? (
                                parse(
                                  parse(
                                    value?.master_crud_languages[0]?.description
                                  ).props.children.props.children
                                )
                              ) : (
                                <>
                                  { value?.master_crud_languages.length > 0 && parse(
                                    value?.master_crud_languages[0]?.description
                                  )}
                                </>
                              )}
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  </details>
                );
              })}
            </div>
          </div>

          <div className="md:w-1/2">
            {/* <img src={f1.src} alt="Fish Image" className="w-full h-auto" /> */}

            <img
              src={BASE_URL() + value?.files[0]?.media_content?.original_url}
              alt=""
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftFaqContent