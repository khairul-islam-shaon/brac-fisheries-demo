'use client'
import Header from "@/components/ui/Header";
import EventSlider from "@/components/UpcomingEvents/EventSlider";
import {useSelector} from "react-redux";

const UpcomingEvents = ({event}) =>{
    const { Language } = useSelector((state) => state);

    return (
        <section className="upcoming-event containar section-gap">
            <Header>{Language.data === "EN" ? event?.component?.title : event?.component?.component_languages[0]?.title}</Header>

            <EventSlider data={event.details}/>
        </section>
    );
}

export default UpcomingEvents