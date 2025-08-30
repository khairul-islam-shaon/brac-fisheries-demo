import TestimonialSlider from "@/components/Testimonial/TestimonialSlider";
import {getComponentDetails} from "@/utils/getComponentDetails";

const Testimonial = async ({id}) => {
    const data = await getComponentDetails(id);
    const componentData = data.data;
    return(
        <div id="Testimonial">
            <TestimonialSlider cards={componentData?.details}/>
        </div>
    )
}
export default Testimonial