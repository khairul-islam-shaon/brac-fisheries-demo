import ServiceGridContent from "@/components/ServiceGrid/ServiceGridContent";
import {getComponentDetails} from "@/utils/getComponentDetails";

const ServiceGrid = async ({id}) =>{
    const data = await getComponentDetails(id);
    const componentData = data.data;
    return(
        <ServiceGridContent data={componentData}/>
    )
}

export default ServiceGrid;