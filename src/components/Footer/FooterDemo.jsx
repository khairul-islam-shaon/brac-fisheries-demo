import footerimg from "../../../public/images/Footer/footerimg.png";
import brandLogo from "../../../public/images/Footer/brandLogo.svg";
import fb from "../../../public/icons/fb_1.svg";
import instagram from "../../../public/icons/insta_1.svg";
import twitter from "../../../public/icons/twitter_1.svg";
import Image from "next/image";
import Link from "next/link";
import Wave from "react-wavify";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();

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
        path: "/about-us",
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
        name: "Gallery",
        path: "/gallery",
      },
      {
        id: 6,
        name: "Contact Us",
        path: "contact-us",
      },
    ],
  };

  return (
    <div>
      <Wave
        fill="#19B3C8"
        paused={false}
        style={{ display: "flex" }}
        options={{
          height: 20,
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
              <h4>{contact_us.title}</h4>
              <div className="space-y-4">
                {contact_us.infos.map((info) => {
                  return (
                    <div key={info.id}>
                      <h5>{info.label}</h5>
                      <p>{info.value}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="media">
              <div className="logo">
                <img src={brandLogo.src} alt="brac logo" />
              </div>

              <div className="icons-container">
                <div className="social-icons space-x-4">
                  <img src={fb.src} alt="" />
                  <img src={instagram.src} alt="" />
                  <img src={twitter.src} alt="" />
                </div>
              </div>
            </div>
            <div className="links">
              <h4>{links.title}</h4>

              <div className="space-y-2">
                {links.links.map((link) => {
                  return (
                    <Link key={link.id} href={link.path}>
                      <p>{link.name}</p>
                    </Link>
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

export default Footer;
