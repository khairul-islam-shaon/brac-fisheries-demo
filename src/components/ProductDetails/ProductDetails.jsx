import Header from "@/components/ui/Header";
import Header2 from "@/components/ui/Header2";
import ProductDetailsContent from "./ProductDetailsContent";
import { getComponentDetails } from "@/utils/getComponentDetails";

const ProductDetails = async ({ id }) => {
  const data = await getComponentDetails(id);
  const componentData = data.data;

  return (
    <>
      <ProductDetailsContent value = {componentData.component} />
    </>
  );
};

export default ProductDetails;
