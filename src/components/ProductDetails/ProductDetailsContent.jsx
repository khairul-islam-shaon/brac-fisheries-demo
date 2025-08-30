"use client";
import { useSelector } from "react-redux";
import parse from "html-react-parser";
import { BASE_URL } from "@/config/config";
import Header2 from "../ui/Header2";

const ProductDetailsContent = ({value}) => {
    const { Language } = useSelector((state) => state);
  return (
    <div id="ProductDetails" className="marginTop">
      <div className="containar">
        <Header2>
          {Language.data === "EN"
            ? value.title
            : value?.component_languages[0]?.title}
        </Header2>
      
       {value?.description1 != null &&
        <p className="mt-2">
          {Language.data === "EN"
            ? parse(value?.description1)?.props &&
              parse(value?.description1)?.props?.children &&
              parse(value?.description1).props.children.type === "code"
              ? parse(parse(value?.description1).props.children.props.children)
              : parse(value?.description1)
            : parse(value?.component_languages[0]?.description1)?.props &&
              parse(value?.component_languages[0]?.description1).props
                .children &&
              parse(value?.component_languages[0]?.description1).props.children
                .type === "code"
            ? parse(
                parse(value?.component_languages[0]?.description1).props
                  .children.props.children
              )
            : parse(value?.component_languages[0]?.description1)}
        </p>
        }
      </div>
    </div>
  );
};

export default ProductDetailsContent;
