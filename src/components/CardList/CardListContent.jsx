"use client";
import { useSelector } from "react-redux";
import parse from "html-react-parser";
import { BASE_URL } from "@/config/config";
import Header from "../ui/Header";
import Link from "next/link";

const CardListContent = ({ value, cardList }) => {
  const { Language } = useSelector((state) => state);
  // console.log(value?.component_languages[0]?.title);

  // console.log(cardList)
  return (
    <div id="CardList" className="marginTop">
      <div className="containar">
        <Header>
          {Language.data === "EN"
            ? value.title
            : value?.component_languages[0]?.title}
        </Header>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardList?.data?.map((value, index) => {
            // console.log(value);
            return (
              <div key={index} className="p-4 flex flex-col">
                <div className="mb-2 flex items-center justify-center h-48 overflow-hidden rounded-lg">
                  <img
                    src={
                      BASE_URL() + value?.files[0]?.media_content?.original_url
                    }
                    alt={value.name}
                    width={1920}
                    height={1080}
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  {value?.name != null && (
                    <h2 className="text-lg font-bold mb-2">
                      {Language.data === "EN" ? (
                        parse(value?.name)?.props &&
                        parse(value?.name)?.props?.children &&
                        parse(value?.name).props.children.type === "code" ? (
                          parse(
                            parse(value?.name).props.children.props.children
                          )
                        ) : (
                          parse(value?.name)
                        )
                      ) : (
                        <>
                          {value?.post_language?.length > 0 &&
                          parse(value?.post_language[0]?.name)?.props &&
                          parse(value?.post_language[0]?.name).props.children &&
                          parse(value?.post_language[0]?.name).props.children
                            .type === "code" ? (
                            parse(
                              parse(value?.post_language[0]?.name).props
                                .children.props.children
                            )
                          ) : (
                            <>
                              {value?.post_language.length > 0 &&
                                parse(value?.post_language[0]?.name)}
                            </>
                          )}
                        </>
                      )}
                    </h2>
                  )}
                  {value.description != null && (
                    <div className="text-sm mb-4 line-clamp-3 overflow-hidden">
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
                          {value?.post_language.length > 0 &&
                          parse(value?.post_language[0]?.description)?.props &&
                          parse(value?.post_language[0]?.description).props
                            .children &&
                          parse(value?.post_language[0]?.description).props
                            .children.type === "code" ? (
                            <p className="article-description">
                              parse(
                              parse(value?.post_language[0]?.description).props
                              .children.props.children )
                            </p>
                          ) : (
                            <p className="">
                              {value?.post_language.length > 0 &&
                                parse(value?.post_language[0]?.description)}
                            </p>
                          )}
                        </>
                      )}
                    </div>
                  )}
                  <hr />
                  <div className="mt-auto flex items-center justify-between py-2">
                    <div>
                      {/* {value.user?.name != null && (
                        <p className="text-gray-600 text-xs">
                          {" "}
                          {parse(value.user?.name)?.props &&
                          parse(value.user?.name)?.props?.children &&
                          parse(value.user?.name).props.children.type === "code"
                            ? parse(
                                parse(value.user?.name).props.children.props
                                  .children
                              )
                            : parse(value.user?.name)}
                        </p>
                      )} */}
                      {value.post_date != null && (
                        <p className="text-gray-600 text-xs mb-4">
                          {Language.data === "EN" ? (
                            parse(value?.post_date)?.props &&
                            parse(value?.post_date)?.props?.children &&
                            parse(value?.post_date).props.children.type ===
                              "code" ? (
                              parse(
                                parse(value?.post_date).props.children.props
                                  .children
                              )
                            ) : (
                              parse(value?.post_date)
                            )
                          ) : (
                            <>
                              {value?.post_language.length > 0 &&
                              parse(value?.post_language[0]?.post_date)
                                ?.props &&
                              parse(value?.post_language[0]?.post_date).props
                                .children &&
                              parse(value?.post_language[0]?.post_date).props
                                .children.type === "code" ? (
                                parse(
                                  parse(value?.post_language[0]?.post_date)
                                    .props.children.props.children
                                )
                              ) : (
                                <>
                                  {value?.post_language.length > 0 &&
                                    parse(value?.post_language[0]?.post_date)}
                                </>
                              )}
                            </>
                          )}
                        </p>
                      )}
                    </div>
                    <Link href={value?.slug}>
                      <button className="bg-[#0056B9] text-white px-2 py-2 sm:px-4 rounded-lg">
                        {Language?.data == "EN" ? "Read More" : "আরো পড়ুন"}
                      </button>
                    </Link>
                  </div>
                  <hr />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardListContent;
