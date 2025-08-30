import OurAspirationContent from "@/components/OurAspiration/OurAspirationContent";
import {getComponentDetails} from "@/utils/getComponentDetails";
const OurAspiration = async ({id}) => {
  const data = await getComponentDetails(id);
  const componentData = data.data;
  // console.log(componentData)

  const {component,details} = componentData
  return <OurAspirationContent details={details} component = {component}/>;
};

export default OurAspiration;
