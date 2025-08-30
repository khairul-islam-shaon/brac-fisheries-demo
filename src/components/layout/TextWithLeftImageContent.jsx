"use client";

import { BASE_URL } from "@/config/config";
import parse from "html-react-parser";



import { useSelector } from "react-redux";

const TextWithLeftImageContent = ({
  component: { title, files, subTitle, description1, component_languages },
}) => {
  const { Language } = useSelector((state) => state);

  const lang = Language.data;

  // console.log(component_languages);
  return (
    <section className="md:grid grid-cols-2 gap-16 common-layout containr mt-[50px] items-center containar">
      <div className="">
        <img
          className="w-full h-auto"
          src={`${BASE_URL()}${files[0]?.media_content.original_url}`}
          alt=""
        />
      </div>

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
    </section>
  );
};

export default TextWithLeftImageContent;
