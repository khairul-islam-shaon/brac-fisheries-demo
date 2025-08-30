"use client"
import { useSelector } from "react-redux";
import Header from "../ui/Header";
import ProductCategorySliderTwo from "./ProductCategorySliderTwo";


const ProductCategoryTwoContent = ({component}) => {
  const { Language } = useSelector((state) => state);

  const lang = Language.data;
  const {
    title,
    files,
    subTitle,
    description1,
    component_languages,
    children_details,
  } = component || {};

  // console.log(title) two
  return (
    <div className="containar marginTop  mb-[100px] product_category overflow-hidden" >
      <Header>{title}</Header>

      <ProductCategorySliderTwo data={children_details} />
    </div>
  );
}

export default ProductCategoryTwoContent