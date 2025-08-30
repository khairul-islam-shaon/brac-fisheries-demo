import Header from "@/components/ui/Header";
import image1 from "../../../public/images/Image1.png"
import Image from "next/image";
import { getComponentDetails } from "@/utils/getComponentDetails";
import CardListContent from "./CardListContent";

const CardList = async({id}) =>{
    const data = await getComponentDetails(id);
    const componentData = data.data;
   
    return(
       <CardListContent value = { componentData?.component} cardList = {componentData?.details}/>
    )
}

export default CardList;