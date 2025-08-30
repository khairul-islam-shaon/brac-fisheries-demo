import Header from "@/components/ui/Header";
import method from "../../../public/images/OurProducts/method.png"
import Image from "next/image";
import ProductGridMethodContent from "./ProductGridMethodContent";
import { getComponentDetails } from "@/utils/getComponentDetails";
const ProductGridMethod =async ({id}) =>{
    const data = await getComponentDetails(id);
    const componentData = data.data;
    return(
        <>
        <ProductGridMethodContent value = {componentData?.component} hapa = {componentData?.details}/>
        </>
    )
}

export default ProductGridMethod;