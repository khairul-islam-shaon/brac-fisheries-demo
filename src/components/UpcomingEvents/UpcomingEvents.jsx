import UpcomingEventsContent from "@/components/UpcomingEvents/UpcomingEventsContent";
import {getComponentDetails} from "@/utils/getComponentDetails";

const UpcomingEvents = async ({id}) => {
    const data = await getComponentDetails(id);
    const componentData = data.data;

  return (
    <UpcomingEventsContent event={componentData}/>
  );
};

export default UpcomingEvents;
