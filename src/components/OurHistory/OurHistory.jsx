import OurHistoryContent from "@/components/OurHistory/OurHistoryContent";
import {getComponentDetails} from "@/utils/getComponentDetails";

const OurHistory = async ({id}) => {
    const data = await getComponentDetails(id);
    const componentData = data.data;
    return (
        <OurHistoryContent value={componentData?.component}/>
    )
}

export default OurHistory;
