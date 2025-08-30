'use client'
import Header from "@/components/ui/Header";

import { useSelector } from "react-redux";
import OurProductSlider from "./OurProductSlider";

const OurProductContent = ({details}) => {
    const { Language } = useSelector((state) => state);

    // console.log(details)

    return (
        <div id="our_products" className="overflow-hidden ">
            <div className="containar">
                <Header>{Language.data === "EN" ? details?.component?.title : details?.component?.component_languages[0]?.title}</Header>

                <OurProductSlider products={details.details}/>
            </div>
        </div>
    )
}

export default OurProductContent