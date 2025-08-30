import { getComponentDetails } from "@/utils/getComponentDetails";
import PondStepsContent from "./PondStepsContent";

const PondSteps = async({id}) => {
      const data = await getComponentDetails(id? id:85);
   
    const componentData = data.data;
    // console.log(componentData);
  return (
    <PondStepsContent
      component={componentData?.component}
      details={componentData?.details}
    />
  );
};

export default PondSteps;
