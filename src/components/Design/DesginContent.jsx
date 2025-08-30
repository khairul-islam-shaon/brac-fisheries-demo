"use client"





import { useSelector } from "react-redux";
import Header from "../ui/Header";
import GridCards from "./GridCards";

const DesginContent = ({
  component: { title, files, subTitle, description1, component_languages },
  details,
}) => {
const { Language } = useSelector((state) => state);

const lang = Language.data;
  return (
    <div>
      <div className={`design containr ${lang=="bn" && "font-SolaimanLipi "}`}>
        <Header>{lang == "bn" ? component_languages[0]?.title : title}</Header>
        <div className="mt-5">
          <GridCards
            className={"rounded-[27px]"}
            cardData={details}
            lang={lang}
          />
        </div>
      </div>
    </div>
  );
};

export default DesginContent;
