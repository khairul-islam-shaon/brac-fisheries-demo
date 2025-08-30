import { BASE_URL } from '@/config/config';
import React from 'react'
import parse from "html-react-parser";
const GridCards = ({ cardData, className, lang }) => {
  return (
    <section className="grid-cards grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-5">
      {cardData.map((card) => {
        const { title, description, master_crud_languages, files } = card;
        // console.log(master_crud_languages)
        return (
          <div className={`card ${className}`} key={card.id}>
            <img
              src={`${BASE_URL()}${files[0]?.media_content.original_url}`}
              alt=""
            />
            <h6>{lang == "bn" ? master_crud_languages[0]?.title : title}</h6>
            <p>
              {lang == "bn"
                ? parse(master_crud_languages[0]?.description)
                : parse(description)}
            </p>
          </div>
        );
      })}
    </section>
  );
};

export default GridCards