
import ProductCategoryTwoContent from "./ProductCategoryTwoContent";
import { getComponentDetails } from "@/utils/getComponentDetails";

const  ProductCategoryTwo =async ({id}) => {
    // const data = await getComponentDetails(81);
    const data = await getComponentDetails(id);
    const componentData = data.data;

    // console.log("catAATWo",id)
    // console.log(componentData);
  return (
    <div>
      {/* <TitleDescriptionContent component={componentData?.component} /> */}
      <ProductCategoryTwoContent  component={componentData?.component} />
    </div>
  );
}

export default ProductCategoryTwo