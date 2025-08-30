'use client'
import Header from "@/components/ui/Header";
import AspirationImage from "@/components/OurAspiration/AspirationImage";
import { useSelector } from "react-redux";
const OurAspirationContent = ({details,component}) =>{
    // console.log(details)
    const { Language } = useSelector((state) => state);
    return (
        <div className="aspiration bg-[#ECF0F4] py-10 marginTop">
            <div className="containar">
                <Header>{Language.data === "EN" ? component?.title : component?.component_languages[0]?.title}</Header>
                <div className="grid md:grid-cols-2 mt-5 gap-10">
                    {details?.data?.map((data) => (
                        <AspirationImage key={data.id} data={data}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OurAspirationContent;