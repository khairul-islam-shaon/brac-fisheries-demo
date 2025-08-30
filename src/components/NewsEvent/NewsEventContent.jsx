'use client'
import Header from "@/components/ui/Header";
import NewsEventSlider from "@/components/NewsEvent/NewsEventSlider";
import {useSelector} from "react-redux";

const NewsEventContent = ({data}) =>{
    const { Language } = useSelector((state) => state);
    return (
        <div id="NewsEvent" className="marginTop overflow-hidden">
            <div className="containar">
                <Header>{Language.data === "EN" ? data?.component?.title : data?.component?.component_languages[0]?.title}</Header>
                <NewsEventSlider eventData={data?.details} component = {data?.component}/>
            </div>
        </div>
    )
}

export default NewsEventContent