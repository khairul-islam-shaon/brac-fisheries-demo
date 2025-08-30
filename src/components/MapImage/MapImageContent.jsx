"use client";
import { useSelector } from "react-redux";
import parse from "html-react-parser";
import { BASE_URL } from "@/config/config";
const MapImageContent = ({ value }) => {
  const { Language } = useSelector((state) => state);
  return (
    <div id="MapImage" className="marginTop">
      <div className="containar">
        {/* <iframe
          className="w-full lg:h-[500px] iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14604.341473915396!2d90.39111058715817!3d23.77997419999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7767d3aaaab%3A0xd3720a8e274190ec!2sBRAC%20Centre!5e0!3m2!1sen!2sbd!4v1717045395221!5m2!1sen!2sbd"
          frameBorder="0"
          // style="border:0;"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe> */}

        {value?.description1 != null && (
          <p className="mt-2">
            {parse(value?.description1)?.props &&
            parse(value?.description1)?.props?.children &&
            parse(value?.description1).props.children.type === "code"
              ? parse(parse(value?.description1).props.children.props.children)
              : parse(value?.description1)}
          </p>
        )}
      </div>
    </div>
  );
};

export default MapImageContent;
