"use client"
import { useSelector } from "react-redux";
import Header from "../ui/Header";
import ProductCategorySlider from "./ProductCategorySlider";


const ProductCategoryOneContent = ({component,details}) => {

  
  const { Language } = useSelector((state) => state);

  const lang = Language.data;
  const { title, files, subTitle, description1, component_languages } =
    component || {};
  return (
    <div className="containar marginTop  mb-[100px] product_category overflow-hidden">
      <Header>
        {Language.data === "EN"
          ? component?.title
          : component?.component_languages[0]?.title}
        {/* {title} */}
      </Header>
          
      <ProductCategorySlider data={details} />
    </div>
  );
}

export default ProductCategoryOneContent