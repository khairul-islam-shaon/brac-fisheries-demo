import { getPageDetails } from "@/utils/getPageDetails";
import Carousel from "@/components/Carousel/Carousel";
import OurStory from "@/components/OurStory/OurStory";
import OurAspiration from "@/components/OurAspiration/OurAspiration";

import ServiceGrid from "@/components/ServiceGrid/ServiceGrid";
import Stats from "@/components/Stats/Stats";
import OurPartner from "@/components/OurPartner/OurPartner";
import NewsEvent from "@/components/NewsEvent/NewsEvent";
import UpcomingEvents from "@/components/UpcomingEvents/UpcomingEvents";
import ContactUs from "@/components/contactus/ContactUs";
import Lang from "@/app/(Home)/Lang";
import BannerWithData from "@/components/Banner/BannerWithData";
import OurHistory from "@/components/OurHistory/OurHistory";
import CompanyBrochure from "@/components/CompanyBrochure/CompanyBrochure";
import Testimonial from "@/components/Testimonial/Testimonial";
import Certification from "@/components/Certification/Certification";
import Career from "@/components/Career/Career";
import Background from "@/components/Background/Background";
import LeftFaqWithImage from "@/components/LeftFaqWithImage/LeftFaqWithImage";
import RightFaqWithImage from "@/components/RightFaqWithImage/RightFaqWithImage";
import MapImage from "@/components/MapImage/MapImage";
import GalleryGrid from "@/components/GalleryGrid/GalleryGrid";
import CardList from "@/components/CardList/CardList";
import GridThreeRowColumn from "@/components/GridThreeRowColumn/GridThreeRowColumn";
import ProductDetails from "@/components/ProductDetails/ProductDetails";
import ProductGridMethod from "@/components/ProductGridMethod/ProductGridMethod";
import ProductStep from "@/components/ProductStep/ProductStep";
import TextWithRightImage from "@/components/layout/TextWithRightImage";
import TextWithLeftImage from "@/components/layout/TextWithLeftImage";
import TextWithTopImage from "@/components/layout/TextWithTopImage";
import TextWithBottomImage from "@/components/layout/TextWithBottomImage";
import Design from "@/components/Design/Design";
import OurProducts from "../../components/OurProducts/OurProducts";
import ProductCategoryTwo from "@/components/ProductCategory/ProductCategoryTwo";
import ProductCategoryOne from "@/components/ProductCategory/ProductCategoryOne";
import TitleDescription from "@/components/layout/TitleDescription";
import PondSteps from "@/components/PondStep/PondSteps";
import MeetOurCustomer from "@/components/MeetOurCustomer/MeetOurCustomer";

const Page = async ({ params: { slug } }) => {
  const pageComponents = await getPageDetails(slug);

  // console.log(pageComponents);

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

      // about us
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

      case "Background":
        return <Background id={compName?.component_id} />;

      // faq
      case "LeftFaqWithImage":
        return <LeftFaqWithImage id={compName?.component_id} />;
      case "RightFaqWithImage":
        return <RightFaqWithImage id={compName?.component_id} />;

      // contact us

      case "MapImage":
        return <MapImage id={compName?.component_id} />;

      // gallery
      case "GalleryGrid":
        return <GalleryGrid id={compName?.component_id} />;

      // news event

      case "CardList":
        return <CardList id={compName?.component_id} />;

      // hatcheries
      case "GridThreeRowColumn":
        return <GridThreeRowColumn id={compName?.component_id} />;

      // product details

      case "ProductDetails":
        return <ProductDetails id={compName?.component_id} />;
      case "ProductGridMethod":
        return <ProductGridMethod id={compName?.component_id} />;
      case "ProductStep":
        return <ProductStep id={compName?.component_id} />;

      // layout

      case "TextWithRightImage":
        return <TextWithRightImage id={compName?.component_id} />;
      case "TextWithLeftImage":
        return <TextWithLeftImage id={compName?.component_id} />;

      case "TextWithTopImage":
        return <TextWithTopImage id={compName?.component_id} />;
      case "TextWithBottomImage":
        return <TextWithBottomImage id={compName?.component_id} />;

      case "Design":
        return <Design id={compName?.component_id} />;

      case "CategoryOne":
        return <ProductCategoryOne id={compName?.component_id} />;
      case "CategoryTwo":
        return <ProductCategoryTwo id={compName?.component_id} />;
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

export default Page;
