"use client";
import { BASE_URL } from "@/config/config";
import Link from "next/link";
import { useSelector } from "react-redux";
import fb from "../../../public/icons/Fb.svg";

import tiktok from "../../../public/icons/tik-tok_3046121 1.svg";
import youtube from "../../../public/icons/youtube_3670147 1.svg";
import Wave from "react-wavify";
const FooterContent = ({
  footerImg,
  footer_one,
  footer_title_one,
  footer_two,
  footer_title_two,
  footer_logo_two,
  footer_three,
  footer_title_three,
  media,
}) => {
  const { Language } = useSelector((state) => state);

  const lang = Language.data;
  // console.log(footer_one);
  const d = new Date();
  let year = d.getFullYear();
//  console.log(media)
  let contact_us = {
    title: "Contact Us",
    infos: [
      {
        id: 1,
        label: "Email",
        value: "info@bracnet.com",
      },
      {
        id: 2,
        label: "Phone",
        value: "+ (880) 9606162636 (Free)",
      },
      {
        id: 3,
        label: "Address",
        value: `iKaderia Tower, Plot # JA-28/
8-B, Bir Uttam AK Khandakar Rd, Dhaka 1212`,
      },
    ],
  };
  let links = {
    title: "Useful Links",
    links: [
      {
        id: 1,
        name: "About Us",
        path: "#",
      },
      {
        id: 2,
        name: "AI Training ",
        path: "#",
      },
      {
        id: 3,
        name: "AI Coverage",
        path: "#",
      },
      {
        id: 4,
        name: "Blog",
        path: "#",
      },
      {
        id: 5,
        name: "Contact Us",
        path: "#",
      },
    ],
  };
  return (
    <div className="mt-5">
      <Wave
        fill="#19B3C8"
        paused={false}
        style={{ display: "flex" }}
        className="h-16"
        options={{
          height: 10,
          amplitude: 20,
          speed: 0.2,
          points: 3,
        }}
      />
      <footer>
        {/* <Image src={footerimg} alt="#" className="-mt-4 " /> */}

        <div className="">
          <div className=" mx-auto top-content   ">
            <div className="contact-us-footer ">
              <h4>
                {" "}
                {lang == "BN"
                  ? footer_title_one?.gs_language[0]?.value
                  : footer_title_one?.value}
              </h4>
              <div className="md:flex justify-end">
                <div className="space-y-4 md:max-w-[285px] ">
                  {footer_one.map((item) => {
                    const { title, description, menu_language } = item;
                    return (
                      <div key={item.id}>
                        <h5>
                          {lang == "BN" ? menu_language[0]?.title : title}
                        </h5>
                        <p className="">
                          {lang == "BN"
                            ? menu_language[0]?.description
                            : description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="media">
              <div className="logo max-w-[120px] object-contain mx-auto">
                <img src={`${BASE_URL()}${footer_logo_two}`} alt="brac fish" />
              </div>

              <div className="icons-container">
                <div className="social-icons space-x-4">
                  {media?.data?.map((item) => {
                    if (item.slug == "facebook") {
                      return (
                        <a key={item.id} href={item?.value} target="_blank">
                          <img alt="" src={fb.src} />
                        </a>
                      );
                    }
                    if (item.slug == "tiktok") {
                      return (
                        <a key={item.id} href={item?.value} target="_blank">
                          <img alt="" src={tiktok.src} />
                        </a>
                      );
                    }
                    if (item.slug == "youtube") {
                      return (
                        <a key={item.id} href={item?.value} target="_blank">
                          <img alt="" src={youtube.src} />
                        </a>
                      );
                    }
                  })}
                  {/* 
                {footer_two.map(item=>{

                })} */}
                  {/* <img src={fb.src} alt="" />
                <img src={tiktok.src} alt="" />
                <img src={youtube.src} alt="" /> */}
                  {/* <img src={pinterest} alt="" /> */}
                </div>
              </div>
            </div>
            <div className="links">
              <h4>
                {lang == "BN"
                  ? footer_title_three?.gs_language[0]?.value
                  : footer_title_three?.value}
              </h4>

              <div className="space-y-2">
                {footer_three.map((item) => {
                  const { title, link, menu_language } = item;
                  return (
                    <div key={item.id}>
                      <Link href={item.link}>
                        <p>{lang == "BN" ? menu_language[0]?.title : title}</p>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* copyright */}
          <div className="copy-right">
            <p className="">Copyright</p>
            <span>© BRAC Fisheries</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterContent;
