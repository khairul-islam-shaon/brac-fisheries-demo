"use client";

import { useSelector } from "react-redux";
import Header from "../ui/Header";
import parse from "html-react-parser";

const TitleDescriptionContent = ({ component }) => {
  const { Language } = useSelector((state) => state);

  const lang = Language.data;
  const { title, files, subTitle, description1, component_languages } =
    component || {};
// console.log(component,lang)
  return (
    <div className="containar marginTop">
      <Header>
        {Language.data === "EN"
          ? component?.title
          : component?.component_languages[0]?.title}
        {/* {title} */}
      </Header>

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

      
    </div>
  );
};

export default TitleDescriptionContent;
