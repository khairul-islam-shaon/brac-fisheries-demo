"use client";
import Header from "../ui/Header"
import ReactPlayer from "react-player";
import playbtn from "../../../public/icons/playbtn.svg";
import image2 from "../../../public/images/slider5.jpg";
import image from "../../../public/images/video-background.png"
import {useState} from "react";
import {useSelector} from "react-redux";
import parse from "html-react-parser";
import {BASE_URL} from "@/config/config";
const OurHistoryContent = ({value}) => {
    // console.log(parse(value.description2).props.children.props.children)
    const [isVideoPoppedUp, setVideoPopUp] = useState(false);
    const { Language } = useSelector((state) => state);



    const parseHtmlContent = (htmlString) => {
  return parse(htmlString, {
    replace: (node) => {
      if (typeof node === 'string' && node.trim() === '') {
        return null; // Filter out empty text nodes
      }
      return node;
    },
  });
};
    // console.log(parse(value?.description1));
    // console.log(parse(value?.component_languages[0]?.description1))
    return (
      <div id="ourHistory" className="containar marginTop ">
        <Header>
          {Language.data === "EN"
            ? value.title
            : value.component_languages[0]?.title}
        </Header>
        <div className="">
          {/* {value?.description1 != null && (
            <p className="">
              {Language.data === "EN"
                ? parse(value?.description1).props.children &&
                  parse(value?.description1).props.children.type === "code"
                  ? parse(
                      parse(value?.description1).props.children.props.children
                    )
                  : parse(value?.description1)
                : parse(value?.component_languages[0]?.description1).props
                    .children &&
                  parse(value?.component_languages[0]?.description1).props
                    .children.type === "code"
                ? parse(
                    parse(value?.component_languages[0]?.description1).props
                      .children.props.children
                  )
                : parse(value?.component_languages[0]?.description1)}
            </p>
          )} */}

          {value?.description1 != null && (
            <p className="">
              {Language.data === "EN"
                ? parseHtmlContent(value?.description1)
                : parseHtmlContent(value?.component_languages[0]?.description1)}
            </p>
          )}

          <div className="">
            {/* <div className="historyGrid">
              {value?.description2 != null && Language.data === "EN"
                ? parse(value?.description2).props.children &&
                  parse(value?.description2).props.children.type === "code"
                  ? parse(
                      parse(value?.description2).props.children.props.children
                    )
                  : parse(value?.description2)
                : parse(value?.component_languages[0]?.description2).props
                    .children &&
                  parse(value?.component_languages[0]?.description2).props
                    .children.type === "code"
                ? parse(
                    parse(value?.component_languages[0]?.description2).props
                      .children.props.children
                  )
                : parse(value?.component_languages[0]?.description2)}
            </div> */}

            <div className="historyGrid">
              {value?.description2 != null && Language.data === "EN"
                ? parseHtmlContent(value?.description2)
                : parseHtmlContent(value?.component_languages[0]?.description2)}
            </div>
          </div>

          <div className="">
            <section className="video_card_our_story  mt-5">
              <div className=" relative  mx-auto   ">
                {isVideoPoppedUp ? (
                  <div className="">
                    <div
                      className="absolute inset-0 w-full h-full "
                      onClick={() => setVideoPopUp(false)}
                    ></div>
                    <div className="px-4 relative w-full h-full">
                      <button
                        className="cancel-btn mb-5 rounded-full duration-150 bg-gray-800 hover:bg-gray-700 text-white"
                        onClick={() => {
                          setVideoPopUp(false);
                          // setAutoPlay(true)
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5 m-auto"
                        >
                          <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                        </svg>
                      </button>
                      <div className="player-wrapper">
                        <ReactPlayer
                          width="100%"
                          height="100%"
                          className="react-player"
                          url={
                            value?.files[0]?.media_content
                              ?.media_category_id === 4 &&
                            value?.files[0]?.media_content?.original_url
                          }
                          playing="true"
                          controls
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative ">
                    <div
                      className="bg-image"
                      // className="bg-image"
                      style={{
                        backgroundImage: ` linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0.04%, rgba(0, 0, 0, 0.84) 99.96%) , url(${
                          value?.files[0]?.media_content?.media_category_id ===
                            4 &&
                          BASE_URL() +
                            value?.files[0]?.media_content?.thumbnail_url
                        })`,
                        borderRadius: "10px",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "100%",
                      }}
                    ></div>
                    <div
                      className="cursor-pointer"
                      onClick={() => {
                        setVideoPopUp(true);
                        // setAutoPlay(false)
                      }}
                    >
                      <button className="absolute playbtn rounded-full inset-0 m-auto text-white  z-20">
                        <img src={playbtn.src} alt="" />
                      </button>
                    </div>
                    <div className="video-caption absolute text-white ">
                      <p className="">
                        {value?.files[0]?.media_content?.title}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    );
}

export default OurHistoryContent;
