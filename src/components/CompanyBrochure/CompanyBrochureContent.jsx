'use client';
import Header from "@/components/ui/Header";
import CompanyBrochureSlider from "@/components/CompanyBrochure/CompanyBrochureSlider";
import {useSelector} from "react-redux";

const CompanyBrochureContent = ({value}) =>{
    const { Language } = useSelector((state) => state);

    return (
        <div id="company_brochure">
            <div className="containar">
                <Header>{Language.data === "EN" ? value?.component?.title : value?.component?.component_languages[0]?.title}</Header>

                <CompanyBrochureSlider cards={value?.details}/>
            </div>
        </div>
    );
}

export default CompanyBrochureContent;