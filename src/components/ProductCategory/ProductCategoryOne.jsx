import ProductCategoryOneContent from "./ProductCategoryOneContent";
import { getComponentDetails } from "@/utils/getComponentDetails";

const ProductCategoryOne = async ({id}) => {
    const data = await getComponentDetails(id);
    // console.log("id 82",id)
    // const data = await getComponentDetails(82);
    const componentData = data.data;
    // console.log(componentData);
  return (
    <div>
      {/* <TitleDescriptionContent component={componentData?.component} /> */}
      <ProductCategoryOneContent component={componentData?.component} details={componentData?.details}/>
    </div>
  );
}

export default ProductCategoryOne