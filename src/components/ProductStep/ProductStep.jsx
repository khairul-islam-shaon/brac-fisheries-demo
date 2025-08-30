import Header from "@/components/ui/Header";
import ProductStepContent from "./ProductStepContent";
import { getComponentDetails } from "@/utils/getComponentDetails";

const ProductStep = async ({ id }) => {
  const data = await getComponentDetails(id);
  const componentData = data.data;

  return <ProductStepContent value={componentData?.component} />;
};

export default ProductStep;
