import { getFooter } from "@/utils/get-footer";
import FooterContent from "./FooterContent";
import { getMedia } from "@/utils/get-social";
const Footer = async () => {
  const footer_oneData = getFooter("footer-one");
  const footer_twoData = getFooter("footer-two");
  const footer_threeData = getFooter("footer-three");
  const media_data = getMedia();

  const [footer_one, footer_two, footer_three, media] = await Promise.all([
    footer_oneData,
    footer_twoData,
    footer_threeData,
    media_data,
  ]);
  // console.log(footer_one)
  return (
    <>
      <FooterContent
        footerImg={footer_one?.data?.footer_logo_one?.details?.original_url}
        footer_one={footer_one?.data?.footer_menu_id_one?.details}
        footer_title_one={footer_one?.data?.footer_title_one}
        footer_two={footer_two?.data?.footer_is_social_two?.details}
        footer_title_two={footer_two?.data?.footer_title_two}
        footer_logo_two={
          footer_two?.data?.footer_logo_two?.details?.original_url
        }
        footer_three={footer_three?.data?.footer_menu_id_three?.details}
        footer_title_three={footer_three?.data?.footer_title_three}
        media={media}
      />
    </>
  );
};
export default Footer;
