'use client'
import {useSelector} from "react-redux";
import {BASE_URL} from "@/config/config";

const Banner = ({value}) =>{
    const { Language } = useSelector((state) => state);
    // console.log(value)

    return (
      <>
        <div id="Banner" className="">
          <img
            className=""
            alt=""
            src={BASE_URL() + value?.files[0]?.media_content?.original_url}
          />
          <div className="containar  ">
            <div className="wrap flex">
              {value.title != null && (
                <div className="banner-card">
                  <h2>
                    {Language.data === "EN"
                      ? value.title
                      : value?.component_languages[0]?.title}
                  </h2>
                </div>
              )}
              <div className="hrx"></div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Banner;