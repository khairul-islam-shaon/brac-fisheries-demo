
import { getComponentDetails } from "@/utils/getComponentDetails";
import { GridThreeRowContent } from "./GridThreeRowContent";
const GridThreeRowColumn =async ({id}) =>{
const data = await getComponentDetails(id);
const componentData = data.data;
  
    return (
        <GridThreeRowContent value = {componentData?.component} mapList = {componentData?.details}/>
    )
}
export default GridThreeRowColumn;