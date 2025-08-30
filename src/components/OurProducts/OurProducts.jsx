
import {getComponentDetails} from "@/utils/getComponentDetails";
import OurProductContent from "./OurProductContent";

const OurProducts = async ({id}) => {
  const data = await getComponentDetails(id);
  const componentData = data.data;
  return (
    <OurProductContent details={componentData}/>
  );
}

export default OurProducts