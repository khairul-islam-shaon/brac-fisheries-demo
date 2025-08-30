
import BackgroundContent from "@/components/Background/BackgroundContent";
import {getComponentDetails} from "@/utils/getComponentDetails";
const Background = async ({id}) =>{
    const data = await getComponentDetails(id);
    const componentData = data.data;
    return(
        <BackgroundContent value={componentData?.component}/>
    )
}

export default Background;