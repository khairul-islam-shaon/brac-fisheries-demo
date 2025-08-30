
import NewsEventContent from "@/components/NewsEvent/NewsEventContent";
import {getComponentDetails} from "@/utils/getComponentDetails";

const NewsEvent = async ({id}) => {
  const data = await getComponentDetails(id);
  const componentData = data.data;
  return (
    <NewsEventContent data={componentData}/>
  );
}

export default NewsEvent