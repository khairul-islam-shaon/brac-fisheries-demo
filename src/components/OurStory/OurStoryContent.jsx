'use client'
import Header from "@/components/ui/Header";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import {BASE_URL} from "@/config/config";

const OurStoryContent = ({details}) =>{
    const { Language } = useSelector((state) => state);
    // console.log(details)
    return (
      <div id="our-story" className="containar marginTop">
        <Header>
          {Language.data === "EN"
            ? details?.title
            : details?.component_languages[0]?.title}
        </Header>
        <div className="grid xl:grid-cols-12 md:gap-16 gap-y-5 items-center">
          <div className="xl:col-span-6">
            <p className="">
              {Language.data === "EN" ? (
                parse(details?.description1)
              ) : (
                <>{details?.component_languages.length > 0 && parse(details?.component_languages[0]?.description1)}</>
              )}
            </p>
          </div>
          <div className="xl:col-span-6">
            <img
              src={BASE_URL() + details?.files[0]?.media_content?.original_url}
              alt=""
            />
          </div>
        </div>
      </div>
    );
}

export default OurStoryContent;