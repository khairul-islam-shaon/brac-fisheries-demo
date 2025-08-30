import CarouselSlider from "./CarouselSlider"
import {getComponentDetails} from "@/utils/getComponentDetails";


const Carousel = async ({id}) => {
    const data = await getComponentDetails(id);
    const componentData = data.data;
    const { details } = componentData;
    // console.log("carousel",data)
    return (
    <div>
     
        <CarouselSlider details={details} />
    </div>
  )
}

export default Carousel