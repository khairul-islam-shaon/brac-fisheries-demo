import Image from "next/image";
import Link from "next/link";
import insta from "../../../public/icons/Insta.svg";
import fb from "../../../public/icons/Fb.svg";
import pinterest from "../../../public/icons/Pintrest.svg";
import twitter from "../../../public/icons/Twiter.svg";
import vectorImage from "../../../public/icons/VectorButton.svg"
import youtube from "../../../public/icons/youtube_3670147 1.svg"
import tiktok from "../../../public/icons/tik-tok_3046121 1 copy.svg";
import { getMedia } from "@/utils/get-social";
export const Button = ({ children, slug, onclick, className,type }) => {
    return (
        <Link href={slug}>
            <button type={type}
                    className={`btnClass button-primary text-white py-4 px-10 rounded-2xl text-xl leading-6 ${className}`}
            >
                {children}
            </button>
        </Link>
    );
};
export const Button2 = ({ children, href, onclick, className }) => {
    return (
        <Link href="#">
            <button
                className={`btnClass border border-pink text-pink py-4 px-10 rounded-2xl text-xl leading-6  ${className}`}
            >
                {children}
            </button>
        </Link>
    );
};

export const ButtonGroup = async() => {
     const media =await getMedia()
    return (
      <div className="btn-grp">
        <ul className="">
          {/* <li>
                    <img alt="" src={insta.src} />
                </li>
                <li>
                    <img alt="" src={fb.src} />
                </li>
                <li>
                    <img alt="" src={twitter.src} />
                </li>
                <li>
                    <img alt="" src={pinterest.src} />
                </li> */}

          {media?.data?.map((item) => {
            let img;
            if (item.slug == "facebook") {
              return (
                <li key={item.id}>
                  <a href={item?.value} target="_blank">
                    <img alt="" src={fb.src} />
                  </a>
                </li>
              );
            }
            if (item.slug == "tiktok") {
              return (
                <li key={item.id}>
                  <a href={item?.value} target="_blank">
                    <img alt="" src={tiktok.src} />
                  </a>
                </li>
              );
            }
            if (item.slug == "youtube") {
              return (
                <li key={item.id}>
                  <a href={item?.value} target="_blank">
                    <img alt="" src={youtube.src} />
                  </a>
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
};
