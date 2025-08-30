import Image from "next/image";
import { useState } from "react";
import playbtn from "../../../public/icons/playbtn.svg"
import ReactPlayer from "react-player";
import parse from "html-react-parser";
import { BASE_URL } from "@/config/config";


export const VideoCardMeetOurCustomer = ({ card, lang }) => {
  const { title, master_crud_languages, files, description } = card;
  const [isVideoPoppedUp, setVideoPopUp] = useState(false);
  // console.log(card)
  return (
    <section>
      <div className="">
        {isVideoPoppedUp ? (
          <div className="w-full h-full  items-center ">
            <div
              className="absolute inset-0 w-full h-full "
              onClick={() => setVideoPopUp(false)}
            ></div>
            <div className="video-container px-4 relative">
              <button
                className="w-12 h-12 mb-5 rounded-full duration-150 bg-gray-800 hover:bg-gray-700 text-white"
                onClick={() => setVideoPopUp(false)}
              >
                {/* cross icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 m-auto"
                >
                  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                </svg>
              </button>
              <div className="react-player">
                <ReactPlayer
                  url={files[0]?.media_content.original_url}
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
                  BASE_URL() + card?.files[0]?.media_content?.thumbnail_url
                })`,

                backgroundPosition: "center ",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* <Image
                src={image}
                className="rounded-lg "
                alt=""
                style={{
                  background: "black",
                }}
              /> */}
            </div>
            <div className="cursor-pointer" onClick={() => setVideoPopUp(true)}>
              <button className="absolute w-12 h-12 rounded-full inset-0 m-auto text-white  z-20">
                <Image src={playbtn} alt="" />
              </button>
            </div>
            <div className="video-caption absolute bottom-0 text-white ml-7 mr-28 pb-10">
              <h3 className=" pb-5">
                {" "}
                {lang == "bn" ? master_crud_languages[0]?.title : title}
              </h3>
              <p className="  line-clamp-2 !text-white">
                {lang == "bn"
                  ? parse(master_crud_languages[0]?.description)
                  : parse(description)}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
