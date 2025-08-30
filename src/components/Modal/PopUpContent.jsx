"use client";

import { useState } from "react";


import { BASE_URL } from "@/config/config";
import { hasDatePassed } from "@/utils/expire";

const PopUpContent = ({ popupImage, popupStatus, popupEndDate }) => {
  const [closePopup, setClosePopup] = useState(true);
  let expired = hasDatePassed(popupEndDate);

  const removePopup = () => {
    setClosePopup(false);
  };

  return (
    <>
      {popupStatus == "active" && !expired && (
        <section
          className="pop_up_modal"
          style={{
            display: `${closePopup ? "block" : "none"}`,
          }}
        >
          <div className="pop_up_modal_content">
            <div className="pop_up_modal_img_wrapper">
              <button onClick={() => removePopup()} className="btn_close_pp">
                X
              </button>
              <img
                src={`${BASE_URL()}${popupImage}`}
                alt="content_img"
                // layout="fill"
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default PopUpContent;
