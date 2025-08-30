import { getComponentDetails } from "@/utils/getComponentDetails";
import TextWithRightImageContent from "./TextWithRightImageContent";
import TextWithLeftImageContent from "./TextWithLeftImageContent";

const TextWithLeftImage = async ({ id }) => {
  const data = await getComponentDetails(id);
  const componentData = data.data;

  return <TextWithLeftImageContent component={componentData?.component} />;
};

export default TextWithLeftImage;
