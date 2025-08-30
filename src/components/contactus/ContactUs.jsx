import Header from "../ui/Header";
import email from "../../../public/icons/email.svg"
import location from "../../../public/icons/location.svg"
import phone from "../../../public/icons/phone.svg"
import Image from "next/image";
import ContactUsContent from "@/components/contactus/ContactUsContent";
import {getComponentDetails} from "@/utils/getComponentDetails";

const ContactUs = async ({id}) => {
  const data = await getComponentDetails(id);
  const componentData = data.data;
  return(
      <ContactUsContent contactData={componentData}/>
  )
}

export default ContactUs