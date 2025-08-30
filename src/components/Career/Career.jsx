import CareerContent from "@/components/Career/CareerContent";
import {getComponentDetails} from "@/utils/getComponentDetails";
const Career = async ({id}) => {
    const data = await getComponentDetails(id);
    const componentData = data.data;
    return(
        <CareerContent data={componentData}/>
    )
}

export default Career;