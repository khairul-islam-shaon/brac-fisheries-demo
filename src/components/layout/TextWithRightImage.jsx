import { getComponentDetails } from "@/utils/getComponentDetails";
import TextWithRightImageContent from "./TextWithRightImageContent";

const TextWithRightImage = async ({ id }) => {
  const data = await getComponentDetails(id);
  const componentData = data.data;
  
  return <TextWithRightImageContent component={componentData?.component}/>;
};

export default TextWithRightImage;
