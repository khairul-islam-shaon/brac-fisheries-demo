import Banner from "@/components/Banner/Banner";
import {getComponentDetails} from "@/utils/getComponentDetails";

const BannerWithData = async ({id}) =>{
    const data = await getComponentDetails(id);
    const componentData = data.data;

    return(
        <Banner value={componentData?.component} />
    )

}

export default BannerWithData