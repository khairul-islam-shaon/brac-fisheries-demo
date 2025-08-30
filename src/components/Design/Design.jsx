

import { getComponentDetails } from "@/utils/getComponentDetails";
import DesginContent from "./DesginContent";

const Design = async({id}) => {
  const data = await getComponentDetails(id);
  const componentData = data.data;
    const {component,details} = componentData
  return (
    <div className="containar">
      <DesginContent component={component} details={details} />
    </div>
  );
};

export default Design;
