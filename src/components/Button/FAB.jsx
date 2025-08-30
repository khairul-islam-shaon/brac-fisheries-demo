import React from "react";
import { BiMessageDetail } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { FaFacebookMessenger } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";
import { getMedia } from "@/utils/get-social";

const FAB = async () => {
  const data = await getMedia();
  // console.log(data)
  const messanger = data?.data?.filter((item) => item.slug == "messenger");
  const whatsapp = data?.data?.filter((item) => item.slug == "whatsapp");

  return (
    <div className="fab">
      <div id="container-floating">
        <div className="nd1 nds">
          <Link
            href={whatsapp.length > 0 ? whatsapp[0]?.value : "#"}
            target="_blank"
          >
            <p className="letter flex justify-center items-center">
              <FaWhatsapp size={35} />
            </p>
          </Link>
        </div>

        <div className="nd2 nds ">
          <Link
            href={messanger.length > 0 ? messanger[0]?.value : "#"}
            target="_blank"
          >
            <p className="letter flex justify-center items-center">
              <FaFacebookMessenger size={35} />
            </p>
          </Link>
        </div>

        <div id="floating-button" className="flex items-center justify-center">
          <div className="plus ">
            <BiMessageDetail />
          </div>
          <div className="edit">X</div>
        </div>
      </div>
    </div>
  );
};

export default FAB;
