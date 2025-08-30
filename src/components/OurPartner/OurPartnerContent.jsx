'use client'
import Header from "@/components/ui/Header";
import p1 from "../../../public/images/partner/p1.png";
import p2 from "../../../public/images/partner/p2.png";
import p3 from "../../../public/images/partner/p3.png";
import p4 from "../../../public/images/partner/p4.png";
import p5 from "../../../public/images/partner/p5.png";
import p6 from "../../../public/images/partner/p6.png";
import {useSelector} from "react-redux";
import {BASE_URL} from "@/config/config";

const OurPartnerContent = ({localPartner,globalPartner}) =>{
    const { Language } = useSelector((state) => state);
    return(
        <div id="OurPartner" className="marginTop">
            <div className="containar">
                <Header>{Language.data === "EN" ? localPartner?.component?.subTitle : localPartner?.component?.component_languages[0]?.subTitle}</Header>

                <div className="flex flex-col md:flex-row justify-between items-center pt-5">
                    <div className="w-full md:w-1/2 flex flex-col items-center mb-8 md:mb-0">
                        <h3 className="text-xl font-semibold text-gray-700 mb-4 ">{Language.data === "EN" ? localPartner?.component?.title : localPartner?.component?.component_languages[0]?.title}</h3>
                        <hr/>
                        <div className="flex justify-center items-center space-x-6 sm:pt-2">
                            {localPartner?.details.map(d =>{
                                return(
                                    <div key={d.id}>
                                        <img src={BASE_URL()+d?.album_pic?.original_url} alt="Local Partner 1" className="h-32"/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col items-center">
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">{Language.data === "EN" ? globalPartner?.component?.title : globalPartner?.component?.component_languages[0]?.title}</h3>
                        <hr/>
                        <div className="flex justify-center items-center space-x-6 sm:pt-1">
                            {globalPartner?.details.map(d =>{
                                return(
                                    <div key={d.id}>
                                        <img src={BASE_URL()+d?.album_pic?.original_url} alt="Local Partner 1" className="h-32"/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurPartnerContent;