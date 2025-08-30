"use client";
import { BASE_URL } from "@/config/config";
import CountUp from "react-countup";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";

const StatsContent = ({ stats }) => {
  const { Language } = useSelector((state) => state);
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  // console.log(stats)

  const handleObserver = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      } else {
        setIsVisible(false); // Reset visibility when out of view
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver);
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <section id="stats" className="marginTop" ref={statsRef}>
      <div>
        <ul
          className="grid md:grid-cols-4 grid-cols-1 items-center containar"
          style={{
            backgroundImage: `linear-gradient(181.38deg, rgba(0, 0, 0, 0) 1.16%, rgba(0, 0, 0, 0.0031) 1.17%, rgba(0, 0, 0, 0.2) 98.83%), url(${
              BASE_URL() +
              stats?.component?.files[0]?.media_content?.original_url
            })`,
            width: "100%",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          {stats?.details.map((item, idx) => {

            // console.log(item.master_crud_languages);
            const rawSubtitle =
              Language.data === "EN"
                ? item.title
                : item?.master_crud_languages[0]?.title;

            const sanitizedSubtitle = rawSubtitle.replace(/[^0-9]/g, "");
            const endValue = parseInt(sanitizedSubtitle, 10) || 0;

            let operator = rawSubtitle.match(/\+/);

            // console.log(operator)

            return (
              <li key={item?.id}>
                <div className="flex justify-center mb-2">
                  <img
                    src={
                      item.files.length > 0
                        ? `${BASE_URL()}/${
                            item?.files[0]?.media_content?.original_url
                          }`
                        : ""
                    }
                    alt=""
                  />
                </div>

                {Language.data == "EN" ? (
                  <h4>
                    {isVisible && <CountUp end={endValue} duration={2} />}{" "}
                    <span className="-ml-4 mb-2">{operator}</span>
                  </h4>
                ) : (
                  <h4>
                    {/* {isVisible && <CountUp end={99} duration={2} />}{" "} */}
                    <span className="-ml-4 mb-2">
                      {item?.master_crud_languages[0]?.title}
                    </span>
                  </h4>
                )}
                <div className="flex justify-center">
                  <p>
                    {Language.data === "EN"
                      ? item.subtitle
                      : item?.master_crud_languages[0]?.subtitle}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default StatsContent;
