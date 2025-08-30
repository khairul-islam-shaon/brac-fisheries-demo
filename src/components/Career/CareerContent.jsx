"use client";
import Header from "@/components/ui/Header";
import { FaArrowRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import parse from "html-react-parser";
import { BASE_URL } from "@/config/config";
import Link from "next/link";

const CareerContent = ({ data }) => {
  const { Language } = useSelector((state) => state);

  // console.log(data);

  return (
    <div id="career" className="marginTop">
      <div className="containar">
        <Header>
          {Language.data === "EN"
            ? data?.component?.title
            : data?.component?.component_languages[0]?.title}
        </Header>
        <div className="mx-auto pt-6">
          <div className="lg:flex flex-col lg:flex-row">
            <div className="w-full lg:w-2/3 space-y-4">
              {data?.details?.data?.map((d) => (
                <div
                  key={d.id}
                  className="bg-white p-4 shadow rounded-lg sm:flex items-center space-y-2 gap-4 "
                >
                  <div>
                    <h2 className="text-lg font-semibold">
                      {Language.data === "EN" ? (
                        d?.name
                      ) : (
                        <>
                          {d.post_language.length > 0 &&
                            d?.post_language[0]?.name}
                        </>
                      )}
                    </h2>
                    {d.description != null && (
                      <p>
                        {Language.data === "EN" ? (
                          parse(d.description)
                        ) : (
                          <>
                            {d.post_language.length > 0 &&
                              parse(d?.post_language[0]?.description)}
                          </>
                        )}
                      </p>
                    )}
                  </div>
                  <Link
                    href={d.link}
                    target="_blank"
                    className="max-w-[120px]  w-full py-1 bg-[#08C9E1] text-white rounded flex items-center justify-center gap-2"
                  >
                    <button className=" w-full py-1 bg-[#08C9E1] text-white rounded flex items-center justify-center gap-2">
                      {Language.data === "EN" ? "Show All" : "আরো দেখুন"}
                      <span className="rounded-full bg-white p-1">
                        <FaArrowRight color="#08C9E1" size="10px" />
                      </span>
                    </button>
                  </Link>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center w-full lg:w-1/2 lg:pl-8 mt-4 lg:mt-0">
              {data?.component?.files.length > 0 && (
                <img
                  src={
                    BASE_URL() +
                    data?.component?.files[0]?.media_content?.original_url
                  }
                  alt="Event"
                  className="rounded shadow"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerContent;
