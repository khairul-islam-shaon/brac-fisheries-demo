'use client'
import Header from "@/components/ui/Header";
import {useSelector} from "react-redux";
import {BASE_URL} from "@/config/config";
import parse from "html-react-parser";

const CertificationContent = ({value}) => {
    const { Language } = useSelector((state) => state);

    // console.log(value.description2)
    return (
      <div id="certification" className="marginTop">
        <div className="containar">
          <Header>
            {Language.data === "EN"
              ? value?.title
              : value?.component_languages[0]?.title}
          </Header>

          <div className="content">
            <img
              src={BASE_URL() + value?.files[0]?.media_content?.original_url}
              alt=""
            />
            <div>
              <span className="font-bold text-[24px]">{value?.subTitle}</span>
              <p className="pb-[10px]">
                {Language.data === "EN"
                  ? parse(value?.description1)
                  : parse(value?.component_languages[0]?.description1)}
              </p>
              <div className="pl-[18px]">
                {value?.description2 ? (
                  <>
                    {Language.data === "EN"
                      ? parse(value?.description2)
                      :<>{value.component_languages ? parse(value?.component_languages[0]?.description2) : ""}</>}
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default CertificationContent;