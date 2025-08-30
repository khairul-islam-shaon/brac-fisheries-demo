import CertificationContent from "@/components/Certification/CertificationContent";
import {getComponentDetails} from "@/utils/getComponentDetails";

const Certification = async ({id}) => {
    const data = await getComponentDetails(id);
    const componentData = data.data;
    return (
        <CertificationContent value={componentData?.component}/>
    )
};

export default Certification;