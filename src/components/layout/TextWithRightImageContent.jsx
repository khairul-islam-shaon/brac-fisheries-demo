"use client";

import { BASE_URL } from "@/config/config";
import parse from "html-react-parser";


import { useSelector } from "react-redux";

const TextWithRightImageContent = ({
  component: { title, files, subTitle, description1, component_languages }

}) => {

   const { Language } = useSelector((state) => state);

   const lang = Language.data;

  //  console.log(files)
  return (
    <section className="md:grid grid-cols-2 gap-20 common-layout items-center containr mt-[50px] containar">
      <p lang={lang}>
        {lang == "BN" ? (
          <>
            {component_languages.length > 0 &&
              parse(component_languages[0]?.description1)}
          </>
        ) : (
          parse(description1)
        )}
      </p>
      <div className="">
        <img
          className="w-full h-auto"
          src={`${BASE_URL()}${files[0]?.media_content.original_url}`}
          alt=""
        />
      </div>
    </section>
  );
};

export default TextWithRightImageContent;
