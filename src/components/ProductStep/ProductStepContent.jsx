"use client";
import { useSelector } from "react-redux";
import parse from "html-react-parser";
import { BASE_URL } from "@/config/config";
import Header from "../ui/Header";

const ProductStepContent = ({ value }) => {
    const { Language } = useSelector((state) => state);

  return (
    <div id="ProductStep" className="marginTop">
      <div className="containar">
        <img
          src={BASE_URL() + value?.files[0]?.media_content?.original_url}
          alt=""
          className="mb-[60px]"
        />

        <Header>
          {Language.data === "EN"
            ? value.title
            : value?.component_languages[0]?.title}
        </Header>
        {value?.description1 != null && (
          <p className="mt-2">
            {Language.data === "EN"
              ? parse(value?.description1)?.props &&
                parse(value?.description1)?.props?.children &&
                parse(value?.description1).props.children.type === "code"
                ? parse(
                    parse(value?.description1).props.children.props.children
                  )
                : parse(value?.description1)
              : parse(value?.component_languages[0]?.description1)?.props &&
                parse(value?.component_languages[0]?.description1).props
                  .children &&
                parse(value?.component_languages[0]?.description1).props
                  .children.type === "code"
              ? parse(
                  parse(value?.component_languages[0]?.description1).props
                    .children.props.children
                )
              : parse(value?.component_languages[0]?.description1)}
          </p>
        )}
        {/* <div className="mt-8">
          <div className="historyGrid">
            <ul className="list-disc list-inside space-y-2">
              <li>
                Removal of all kinds of weeds from the banks of nursery pond. If
                there is any kind of whole or broken on the bank of the pond, it
                should be repaired. If possible, dry the bottom of the pond and
                level it with cultivation.
              </li>
              <li>
                The nursery pond should be surrounded by a filter net (2 feet
                high) so that snakes and frogs cannot enter into the pond.
              </li>
              <li>
                Giant and unwanted fish/animals can be removed by drying the
                pond or applying chemicals which are not harmful to public
                health like rotenone powder.
              </li>
              <li>
                Removal of all kinds of weeds from the banks of nursery pond. If
                there is any kind of whole or broken on the bank of the pond, it
                should be repaired. If possible, dry the bottom of the pond and
                level it with cultivation.
              </li>
              <li>
                The nursery pond should be surrounded by a filter net (2 feet
                high) so that snakes and frogs cannot enter into the pond.
              </li>
              <li>
                Giant and unwanted fish/animals can be removed by drying the
                pond or applying chemicals which are not harmful to public
                health like rotenone powder.
              </li>
              <li>
                Removal of all kinds of weeds from the banks of nursery pond. If
                there is any kind of whole or broken on the bank of the pond, it
                should be repaired. If possible, dry the bottom of the pond and
                level it with cultivation.
              </li>
              <li>
                The nursery pond should be surrounded by a filter net (2 feet
                high) so that snakes and frogs cannot enter into the pond.
              </li>
              <li>
                Giant and unwanted fish/animals can be removed by drying the
                pond or applying chemicals which are not harmful to public
                health like rotenone powder.
              </li>
              <li>
                Removal of all kinds of weeds from the banks of nursery pond. If
                there is any kind of whole or broken on the bank of the pond, it
                should be repaired. If possible, dry the bottom of the pond and
                level it with cultivation.
              </li>
              <li>
                The nursery pond should be surrounded by a filter net (2 feet
                high) so that snakes and frogs cannot enter into the pond.
              </li>
              <li>
                Giant and unwanted fish/animals can be removed by drying the
                pond or applying chemicals which are not harmful to public
                health like rotenone powder.
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ProductStepContent;
