import OurPartnerContent from "@/components/OurPartner/OurPartnerContent";
import {getComponentDetails} from "@/utils/getComponentDetails";
const OurPartner = async ({id}) =>{
    const localPartner = await getComponentDetails(id)
    const globalPartner = await getComponentDetails(id+1)
    return(
        <OurPartnerContent localPartner={localPartner?.data} globalPartner={globalPartner?.data}/>
    )
}

export default OurPartner;