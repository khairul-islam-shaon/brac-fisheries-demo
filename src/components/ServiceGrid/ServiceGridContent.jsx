'use client'
import Header from "@/components/ui/Header";
import { useSelector } from "react-redux";
import {BASE_URL} from "@/config/config";
import Link from "next/link";

const ServiceGridContent = ({data}) => {
    const { Language } = useSelector((state) => state);


    return (
      <div id="ServiceGrid" className="marginTop">
        <div className="containar">
          <Header>
            {Language.data === "EN"
              ? data?.component?.title
              : data?.component?.component_languages[0]?.title}
          </Header>
        
            <div className="flex flex-wrap justify-center mt-5 gap-y-2">
              {data?.details?.data.map((d) => {
                return (
                  <div key={d.id} className=" px-4 mb-6 service-card">
                    <div className=" rounded-lg overflow-hidden">
                      <img
                        src={
                          BASE_URL() + d.files[0]?.media_content?.original_url
                        }
                        alt="Service 1"
                        className="w-full max-h-60  bg-[#19B3C8] "
                      />
                      <div className=" bg-[#1c486b]  line-clamp-2 title title-container  flex items-center justify-center">
                        <Link href={d.page_details ? d.page_details.slug : "#"}>
                          <p className="text-white text-center font-extrabold service-des hover:text-[#08c9e1]">
                            {Language.data === "EN" ? (
                              d.name
                            ) : (
                              <>
                                {d.post_language.length > 0 &&
                                  d.post_language[0].name}{" "}
                              </>
                            )}
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
           
          </div>
        </div>
      </div>
    );
}

export default ServiceGridContent