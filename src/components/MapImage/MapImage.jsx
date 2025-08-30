import { getComponentDetails } from "@/utils/getComponentDetails";
import MapImageContent from "./MapImageContent";
const MapImage = async ({ id }) => {
  const data = await getComponentDetails(id);
  const componentData = data.data;
  return (<MapImageContent value = {componentData.component}/>);
};

export default MapImage;
