import {getComponentDetails} from "@/utils/getComponentDetails";
import OurStoryContent from "@/components/OurStory/OurStoryContent";

const OurStory = async ({id}) => {
  const data = await getComponentDetails(id);
  const componentData = data.data;
  const { component } = componentData;

  return (
    <OurStoryContent details={component}/>
  );
};

export default OurStory;
