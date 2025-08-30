import { getComponentDetails } from "@/utils/getComponentDetails";
import image1 from "../../../public/images/gallery/g1.png";
import image2 from "../../../public/images/gallery/g2.png";
import image3 from "../../../public/images/gallery/g3.png";
import image4 from "../../../public/images/gallery/g4.png";
import image5 from "../../../public/images/gallery/g5.png";
import image6 from "../../../public/images/gallery/g6.png";
import image7 from "../../../public/images/gallery/g7.png";
import image8 from "../../../public/images/gallery/g8.png";
import image9 from "../../../public/images/gallery/g9.png";
import GalleryGridContent from "./GalleryGridContent";

const GalleryGrid =async ({id}) =>{
    const data = await getComponentDetails(id);
    const componentData = data.data;
    
    //     {
    //         "id":1,
    //         "image":image1
    //     },
    //     {
    //         "id":2,
    //         "image":image2
    //     },
    //     {
    //         "id":3,
    //         "image":image3
    //     },
    //     {
    //         "id":4,
    //         "image":image4
    //     },
    //     {
    //         "id":5,
    //         "image":image5
    //     },
    //     {
    //         "id":6,
    //         "image":image6
    //     },
    //     {
    //         "id":7,
    //         "image":image7
    //     },
    //     {
    //         "id":8,
    //         "image":image8
    //     },
    //     {
    //         "id":9,
    //         "image":image9
    //     },
    // ];

   

    return <GalleryGridContent galleryImages={componentData?.details} />;
}

export default GalleryGrid;