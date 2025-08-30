import { BASE_URL } from "@/config/config";
import parse from "html-react-parser";
import Link from "next/link";
import { useSelector } from "react-redux";

const SubSliderCard = ({ card, length }) => {
  const { Language } = useSelector((state) => state);
  // console.log("subslider",card);
  return (
    <>
      {/* <div
        className="bg-image"
        style={{
          backgroundImage: `  linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0.04%, rgba(0, 0, 0, 0.72) 84.35%), url(${
            BASE_URL() + card?.files[0]?.media_content?.original_url
          })`,
          width: "600px",
          height: "400px",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div> */}
      {/* <section>
        <div
          className="bg-white border rounded-tl-[31px] rounded-tr-[34px] rounded-bl-[30px] rounded-br-[30px] px-10 py-7    
         shadow-lg card"
        >
          <h3 className="text-2xl font-bold mb-3.5  text-gray_3">
            {Language?.data === "EN" ? (
              card?.title
            ) : (
              <>
                {card.post_language.length > 0 && card?.post_language[0]?.name}
              </>
            )}
          </h3>
          <div className="mb-5 text-gray_4 font-normal">
            {Language?.data === "EN" ? (
              <> {parse(card?.description)} </>
            ) : (
              <>
                {" "}
                {card?.post_language.length > 0 &&
                  parse(card?.post_language[0]?.description)}
              </>
            )}
          </div>
          <Link href={card?.slug ? card?.slug : "#"}>
            <button
              className="button-primary hover:bg-[#1c486b] hover:text-white hover:border hover:border-[#1C486B]"
              style={{ borderRadius: "16px" }}
            >
              {Language?.data === "EN" ? "Learn More" : "আর ও জানুন"}
            </button>
          </Link>
        </div>
      </section> */}
      {}
      {/* dfdf
    {card?.title} */}
      <section className="our-product-card">
        <div
          className="bg-image"
          style={{
            backgroundImage: `  linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0.04%, rgba(0, 0, 0, 0.72) 84.35%), url(${
              BASE_URL() + card?.files[0]?.media_content?.original_url
            })`,

            backgroundPosition: "center",
            backgroundSize: length == 1 ? "cover": "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="bg-white border rounded-tl-[31px] rounded-tr-[34px] rounded-bl-[30px] rounded-br-[30px] px-10 py-7    
         shadow-lg card"
        >
          <h3 className="text-2xl font-bold mb-3.5  text-gray_3">
            {Language?.data === "EN" ? (
              card?.title
            ) : (
              <>
                {card.master_crud_languages > 0 &&
                  card?.master_crud_languages[0]?.name}
              </>
            )}
          </h3>
          <div className="mb-5 text-gray_4 font-normal">
            {Language?.data === "EN" ? (
              <> {parse(card?.description)} </>
            ) : (
              <>
                {" "}
                {card?.master_crud_languages.length > 0 &&
                  parse(card?.master_crud_languages[0]?.description)}
              </>
            )}
          </div>
          <Link href={card?.link ? card?.link : "#"}>
            <button
              className="button-primary !bg-[#1c486b] !text-white hover:!bg-white hover:!text-[#1c486b] hover:border hover:border-[#1C486B]"
              style={{ borderRadius: "16px" }}
            >
              {Language?.data === "EN" ? "Learn More" : "আর ও জানুন"}
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default SubSliderCard;
