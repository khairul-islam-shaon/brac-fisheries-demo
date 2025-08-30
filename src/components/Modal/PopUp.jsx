import { getPopUp } from "@/utils/getPopUp";
import PopUpContent from "./PopUpContent";

const PopUp = async () => {
  const data = await getPopUp()
  // let data = {
  //   data: {
  //     pop_up_end_date_time: "2025-02-17 23:59:59",
  //     pop_up_image: {
  //       id: 13,
  //       original_url: "/storage/media/original/13-slider-2-1717655290.jpg",
  //       mimeType: null,
  //       sizeInBytes: null,
  //       thumbnail_url: null,
  //       custom_url: null,
  //       title: "Slide 2",
  //       alt_text: null,
  //       description: null,
  //       media_category_id: 1,
  //       created_by: 1,
  //       updated_by: 15,
  //       created_at: "2024-05-19T07:29:16.000000Z",
  //       updated_at: "2024-06-12T04:02:10.000000Z",
  //       media_category: {
  //         id: 1,
  //         name: "Image",
  //       },
  //     },
  //     pop_up_start_date_time: "2025-01-16 00:00:00",
  //     pop_up_status: "active",
  //   },
  // };


  return (
    <PopUpContent
      popupImage={data?.data?.pop_up_image?.original_url}
      popupStatus={data?.data?.pop_up_status}
      popupEndDate={data?.data?.pop_up_end_date_time}
      // popupEndDate="2025-02-17 23:59:59"
    />
  );
};

export default PopUp;
