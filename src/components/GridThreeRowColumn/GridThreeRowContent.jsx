"use client"
import Header2 from "@/components/ui/Header2";
import { FaArrowRight } from "react-icons/fa";
import locationIcon from "../../../public/icons/Icon.svg";
import data from "../../data/data.json";
import closeModal from "../../../public/icons/x-circle.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import parse from "html-react-parser";
import { BASE_URL } from "@/config/config";
export const GridThreeRowContent = ({value,mapList}) => {
    const { Language } = useSelector((state) => state);
  const [showModal, setShowModal] = useState(false);
  const [getValue, setValue] = useState({});

  const showData = (value) => {
    setShowModal(true);
    setValue(value);
  };

  // console.log(getValue);

  return (
    <div id="GridThreeRowColumn" className="marginTop">
      <div className="containar mx-auto py-8">
        <Header2>
          {Language.data === "EN"
            ? value.title
            : value?.component_languages[0]?.title}
        </Header2>
        {/*<img src={data[0].image} alt=""/>*/}
        <hr />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-14">
          {mapList.map((item) => {
            // console.log(item)
            return (
              <div
                key={item.id}
                className="bg-[#F0F8FF] p-6 shadow "
              >
                <h2 className="text-xl font-semibold mb-2">
                  {" "}
                  {Language.data === "EN" ? (
                    item.title
                  ) : (
                    <>
                      {item?.master_crud_languages?.length > 0 &&
                        item?.master_crud_languages[0]?.title}
                    </>
                  )}
                </h2>
                <div>
                  {Language.data === "EN"
                    ? parse(item?.description)?.props &&
                      parse(item?.description)?.props?.children &&
                      parse(item?.description).props.children.type === "code"
                      ? parse(
                          parse(item?.description).props.children.props.children
                        )
                      : parse(item?.description)
                    : parse(item?.master_crud_languages[0]?.description)
                        ?.props &&
                      parse(item?.master_crud_languages[0]?.description).props
                        .children &&
                      parse(item?.master_crud_languages[0]?.description).props
                        .children.type === "code"
                    ? parse(
                        parse(item?.master_crud_languages[0]?.description).props
                          .children.props.children
                      )
                    : parse(item?.master_crud_languages[0]?.description)}
                </div>
                <button
                  type="button"
                  onClick={() => showData(item)}
                  data-modal-target="default-modal"
                  data-modal-toggle="default-modal"
                  className="max-w-[135px] w-full py-2 bg-[#08C9E1] text-white rounded flex items-center justify-center gap-2"
                >
                  <img src={locationIcon.src} alt="" /> Location
                  <span className="rounded-full bg-white p-1">
                    <FaArrowRight color="#08C9E1" size="10px" />
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="modal flex items-center justify-between p-5 border-b border-solid border-blueGray-200 rounded-t lg:w-[800px] lg:h-[500px] sm:w-[200px] sm:h-[200px]">
                  <div className="relative p-6 flex-auto">
                    <div className="flex items-center">
                      <h2 className="text-xl font-semibold mb-2">
                        {getValue?.master_crud_languages?.length > 0 &&
                          getValue?.master_crud_languages[0]?.title}
                      </h2>
                      <button
                        className="p-1 ml-auto border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <img src={closeModal.src} alt="" />
                      </button>
                    </div>
                    {/* <p className="mb-1">{getValue.address2}</p>
                    <p className="mb-1">{getValue.phone1}</p>
                    <p className="mb-4">{getValue.phone2}</p> */}

                    <div className="!mb-5">
                      {Language.data === "EN"
                        ? parse(getValue?.description)?.props &&
                          parse(getValue?.description)?.props?.children &&
                          parse(getValue?.description).props.children.type ===
                            "code"
                          ? parse(
                              parse(getValue?.description).props.children.props
                                .children
                            )
                          : parse(getValue?.description)
                        : parse(getValue?.master_crud_languages[0]?.description)
                            ?.props &&
                          parse(getValue?.master_crud_languages[0]?.description)
                            .props.children &&
                          parse(getValue?.master_crud_languages[0]?.description)
                            .props.children.type === "code"
                        ? parse(
                            parse(getValue?.master_crud_languages[0]?.description)
                              .props.children.props.children
                          )
                        : parse(getValue?.master_crud_languages[0]?.description)}
                    </div>
                    <iframe
                      className="frame lg:h-[250px] lg:w-[715px] sm:h-[150px] sm:w-[250px]"
                      src={getValue?.link}
                      frameBorder="0"
                      // style="border:0;"
                      allowFullScreen=""
                      aria-hidden="false"
                      tabIndex="0"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};
