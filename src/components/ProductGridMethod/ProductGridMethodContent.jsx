"use client";
import { useSelector } from "react-redux";
import parse from "html-react-parser";
import { BASE_URL } from "@/config/config";
import Header from "../ui/Header";

const ProductGridMethodContent = ({ value, hapa }) => {
//   console.log(hapa?.master_crud_languages[0]);
 
  const { Language } = useSelector((state) => state);
  return (
    <div id="ProductGridMethod" className="marginTop">
      <div className="containar">
        <Header>
          {Language.data === "EN"
            ? value.title
            : value?.component_languages[0]?.title}
        </Header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-5">
          {hapa.map((item) => {
            const { title, description, master_crud_languages } = item;

            return (
              <div key={item.id} className=" bg-white">
                <h2 className="text-lg font-bold mb-2">
                  {Language.data === "EN"
                    ? item.title
                    : item?.master_crud_languages[0]?.title}
                </h2>
                {item?.description != null && (
                  <p className="mt-2">
                    {Language.data === "EN"
                      ? parse(item?.description)?.props &&
                        parse(item?.description)?.props?.children &&
                        parse(item?.description).props.children.type ===
                          "code"
                        ? parse(
                            parse(item?.description).props.children.props
                              .children
                          )
                        : parse(item?.description)
                      : parse(item?.master_crud_languages[0]?.description)
                          ?.props &&
                        parse(item?.master_crud_languages[0]?.description).props
                          .children &&
                        parse(item?.master_crud_languages[0]?.description).props
                          .children.type === "code"
                      ? parse(
                          parse(item?.master_crud_languages[0]?.description)
                            .props.children.props.children
                        )
                      : parse(item?.master_crud_languages[0]?.description)}
                  </p>
                )}
              </div>
            );
          })}
          

        
        </div>
        {/* eslint-disable-next-line react/jsx-no-undef */}
        {/* <img src={method.src} alt="" className="pt-8" /> */}
      </div>
    </div>
  );
};

export default ProductGridMethodContent;
