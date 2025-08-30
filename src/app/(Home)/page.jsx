import { getPageDetails } from "@/utils/getPageDetails";
import Carousel from "@/components/Carousel/Carousel";
import ContactUs from "@/components/contactus/ContactUs";
import OurAspiration from "@/components/OurAspiration/OurAspiration";

import OurStory from "@/components/OurStory/OurStory";
import Stats from "@/components/Stats/Stats";
import UpcomingEvents from "@/components/UpcomingEvents/UpcomingEvents";
import NewsEvent from "@/components/NewsEvent/NewsEvent";
import OurPartner from "@/components/OurPartner/OurPartner";
import ServiceGrid from "@/components/ServiceGrid/ServiceGrid";
import Lang from "@/app/(Home)/Lang";
import Banner from "@/components/Banner/Banner";
import BannerWithData from "@/components/Banner/BannerWithData";
import OurHistory from "@/components/OurHistory/OurHistory";
import CompanyBrochure from "@/components/CompanyBrochure/CompanyBrochure";
import Testimonial from "@/components/Testimonial/Testimonial";
import Certification from "@/components/Certification/Certification";
import Career from "@/components/Career/Career";
import TextWithRightImage from "@/components/layout/TextWithRightImage";
import TextWithLeftImage from "@/components/layout/TextWithLeftImage";
import TextWithTopImage from "@/components/layout/TextWithTopImage";
import TextWithBottomImage from "@/components/layout/TextWithBottomImage";
import ProductDetails from "@/components/ProductDetails/ProductDetails";
import Design from "@/components/Design/Design";
import TitleDescription from "@/components/layout/TitleDescription";
import ProductCategoryOne from "@/components/ProductCategory/ProductCategoryOne";
import ProductCategoryTwo from "@/components/ProductCategory/ProductCategoryTwo";
import OurProducts from "../../components/OurProducts/OurProducts";
import PondSteps from "@/components/PondStep/PondSteps";
import MeetOurCustomer from "@/components/MeetOurCustomer/MeetOurCustomer";

// products

const homePage = async () => {
  const pageComponents = await getPageDetails("home");

  let content;
  if (pageComponents?.data != null) {
    content = JSON.parse(pageComponents?.data?.contents);
  } else {
    content = "";
  }

  const returnMyCom = (compName) => {
    switch (compName.name) {
      case "Carousel":
        return <Carousel id={compName?.component_id} />;
      case "OurStory":
        return <OurStory id={compName?.component_id} />;
      case "OurAspiration":
        return <OurAspiration id={compName?.component_id} />;
      case "OurProducts":
        return <OurProducts id={compName?.component_id} />;
      case "ServiceGrid":
        return <ServiceGrid id={compName?.component_id} />;
      case "Stats":
        return <Stats id={compName?.component_id} />;
      case "LocalPartners":
        return <OurPartner id={compName?.component_id} />;
      case "NewsEvent":
        return <NewsEvent id={compName?.component_id} />;
      case "UpcomingEvents":
        return <UpcomingEvents id={compName?.component_id} />;
      case "ContactUs":
        return <ContactUs id={compName?.component_id} />;
      case "BannerWithData":
        return <BannerWithData id={compName?.component_id} />;
      case "OurHistory":
        return <OurHistory id={compName?.component_id} />;
      case "CompanyBrochure":
        return <CompanyBrochure id={compName?.component_id} />;
      case "Testimonial":
        return <Testimonial id={compName?.component_id} />;
      case "Certification":
        return <Certification id={compName?.component_id} />;
      case "Career":
        return <Career id={compName?.component_id} />;

      case "TextWithRightImage":
        return <TextWithRightImage id={compName?.component_id} />;
      case "TextWithLeftImage":
        return <TextWithLeftImage id={compName?.component_id} />;

      case "TextWithTopImage":
        return <TextWithTopImage id={compName?.component_id} />;
      case "TextWithBottomImage":
        return <TextWithBottomImage id={compName?.component_id} />;

      case "ProductDetails":
        return <ProductDetails id={compName?.component_id} />;

      case "Design":
        return <Design id={compName?.component_id} />;
      case "CategoryOne":
        return <ProductCategoryTwo id={compName?.component_id} />;
      case "CategoryTwo":
        return <ProductCategoryOne id={compName?.component_id} />;
      case "TitleDescription":
        return <TitleDescription id={compName?.component_id} />;
      case "InfoCard":
        return <PondSteps id={compName?.component_id} />;
      case "MeetOurCustomerSlider":
        return <MeetOurCustomer id={compName?.component_id} />;
    }
  };
  return (
    <>
      {content.length > 0 &&
        content.map((data) => {
          return <Lang key={data.id} component={returnMyCom(data)} />;
        })}

     
    </>
  );
};

export default homePage;
