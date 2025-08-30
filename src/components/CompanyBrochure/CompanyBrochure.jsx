import CompanyBrochureContent from "@/components/CompanyBrochure/CompanyBrochureContent";
import {getComponentDetails} from "@/utils/getComponentDetails";

const CompanyBrochure = async ({id}) => {
    const data = await getComponentDetails(id);
    const componentData = data.data;

    return (
        <CompanyBrochureContent value={componentData}/>
    );
}

export default CompanyBrochure