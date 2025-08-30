import { getComponentDetails } from "@/utils/getComponentDetails";
import TitleDescriptionContent from "./TitleDescriptionContent";

const TitleDescription = async ({ id }) => {
  const data = await getComponentDetails(id ? id : 84);
  const componentData = data.data;
  return (
    <>
      <TitleDescriptionContent component={componentData?.component} />
      {/* <TitleDescriptionContent  /> */}
    </>
  );
};

export default TitleDescription;
