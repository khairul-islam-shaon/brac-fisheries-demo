"use client"


import { useSelector } from 'react-redux';
import parse from "html-react-parser";
import { BASE_URL } from '@/config/config';
const TextWithTopImageContent = ({
  component: { title, files, subTitle, description1, component_languages }
}) => {
  const { Language } = useSelector((state) => state);

  const lang = Language.data;

  return (
    <section className="common-layout containr mt-[50px] containar">
      <div className="mb-10">
        <img
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

export default TextWithTopImageContent