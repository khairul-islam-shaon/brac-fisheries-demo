'use client'
import Header from "@/components/ui/Header";
import titlpia from "../../../public/images/OurProducts/tilapia.png";
import {useSelector} from "react-redux";
import parse from "html-react-parser";
import {BASE_URL} from "@/config/config";
const BackgroundContent = ({value}) =>{
    const { Language } = useSelector((state) => state);

    // console.log(parse(value?.component_languages[0]?.description1).length)
    // console.log(parse(value?.description1))'

    // console.log(value)

    return (
      <div id="background" className="marginTop">
        <div className="containar">
          <Header>
            {Language.data === "EN"
              ? value.title
              : value?.component_languages[0]?.title}
          </Header>

          {value?.description1 != null && (
            <p className="mt-2">
              {Language.data === "EN" ? (
                parse(value?.description1)?.props &&
                parse(value?.description1)?.props?.children &&
                parse(value?.description1).props.children.type === "code" ? (
                  parse(
                    parse(value?.description1).props.children.props.children
                  )
                ) : (
                  parse(value?.description1)
                )
              ) : (
                <>
                  {value?.component_languages.length > 0 &&
                  parse(value?.component_languages[0]?.description1)?.props &&
                  parse(value?.component_languages[0]?.description1).props
                    .children &&
                  parse(value?.component_languages[0]?.description1).props
                    .children.type === "code" ? (
                    parse(
                      parse(value?.component_languages[0]?.description1).props
                        .children.props.children
                    )
                  ) : (
                    <>
                      {value?.component_languages.length > 0 &&
                        parse(value?.component_languages[0]?.description1)}
                    </>
                  )}
                </>
              )}
            </p>
          )}

          {value?.files.length > 0 && (
            <img
              src={BASE_URL() + value?.files[0]?.media_content?.original_url}
              alt=""
              className="marginTop"
            />
          )}

          <div className="mt-8">
            {value.description2 != null && Language.data === "EN" ? (
              parse(value?.description2).props &&
              parse(value?.description2).props.children &&
              parse(value?.description2).props.children.type === "code" ? (
                <div className="historyGrid">
                  {parse(
                    parse(value?.description2).props.children.props.children
                  )}
                </div>
              ) : (
                parse(value?.description2)
              )
            ) : (
              <>
                {value.description2 && (
                  <>
                    {value?.component_languages.length > 0 &&
                    parse(value?.component_languages[0]?.description2)?.props &&
                    parse(value?.component_languages[0]?.description2).props
                      .children &&
                    parse(value?.component_languages[0]?.description2).props
                      .children.type === "code" ? (
                      <div className="historyGrid">
                        {parse(
                          parse(value?.component_languages[0]?.description2)
                            .props.children.props.children
                        )}
                      </div>
                    ) : (
                      <>
                        {" "}
                        {value?.component_languages.length > 0 &&
                          parse(value?.component_languages[0]?.description2)}
                      </>
                    )}
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    );
}

export default BackgroundContent