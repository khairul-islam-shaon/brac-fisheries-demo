import Header from "@/components/ui/Header";
import f1 from "../../../public/images/faq/f1.png"
import LeftFaqContent from "./LeftFaqContent";
import { getComponentDetails } from "@/utils/getComponentDetails";
const LeftFaqWithImage =async ({id}) => {
  
    // let data = [
    //     {
    //         "que": "What is the Hipcouch Interior Design Service?",
    //         "ans": "It is a long established fact that a reader will be distracted by the readable content of a " +
    //             "page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal " +
    //             "distribution of letters, as opposed to using 'Content here, content here', making it look like readable " +
    //             "English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model " +
    //             "text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions " +
    //             "have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like."
    //     },
    //     {
    //         "que": "So, how exactly does this work?",
    //         "ans": "It is a long established fact that a reader will be distracted by the readable content of a " +
    //             "page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal " +
    //             "distribution of letters, as opposed to using"
    //     },
    //     {
    //         "que": "What cities do you currently operate in?",
    //         "ans": "It is a long established fact that a reader will be distracted by the readable content of a " +
    //             "page when looking at its layout. The point of using Lorem"
    //     },
    //     {
    //         "que": "Hipcouch Interior Design Service?",
    //         "ans": " web page editors now use Lorem Ipsum as their default model " +
    //             "text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions " +
    //             "have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like."
    //     },
    //     {
    //         "que": "What kind of interior designers do you have?",
    //         "ans": "Content here, content here', making it look like readable " +
    //             "English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model " +
    //             "text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions " +
    //             "have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like."
    //     }
    // ]

 const data = await getComponentDetails(id);
 const componentData = data.data;
    return (
      <>
        <LeftFaqContent value={componentData?.component} faqList = {componentData?.details} />
      </>
    );
}

export default LeftFaqWithImage