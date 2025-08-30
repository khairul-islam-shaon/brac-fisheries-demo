import { getComponentDetails } from "@/utils/getComponentDetails";
import MeetOurCustomerSlider from "./MeetOurCustomerSlider";


const MeetOurCustomer = async ({ id }) => {
  const data = await getComponentDetails(id);
  const componentData = data.data;
  const { component, details } = componentData;
  return (
    <>
      <MeetOurCustomerSlider component={component} details={details} />
    
    </>
  );
};

export default MeetOurCustomer;
