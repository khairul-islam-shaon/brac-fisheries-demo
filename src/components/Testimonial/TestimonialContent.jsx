'use client'
import {BASE_URL} from "@/config/config";

const TestimonialContent = ({card}) =>{
    return(
        <section className="testimonial-card">
            <div className="flex flex-col justify-center items-center">
                <img src={BASE_URL()+card?.media_content?.original_url} alt="" className="rounded-full"/>
                <h3>{card?.name}</h3>
                <span>{card?.designation}</span>
                <p className="testimonial-para">
                    {card?.description}
                </p>
            </div>
        </section>
    )
}

export default TestimonialContent