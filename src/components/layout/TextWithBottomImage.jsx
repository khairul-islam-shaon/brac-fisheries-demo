import React from "react";
import TextWithTopImageContent from "./TextWithTopImageContent";
import { getComponentDetails } from "@/utils/getComponentDetails";
import TextWithBottomImageContent from "./TextWithBottomImageContent";

const TextWithBottomImage = async ({ id }) => {
  const data = await getComponentDetails(id);
  const componentData = data.data;
  return (
    <>
      <TextWithBottomImageContent component={componentData?.component} />
    </>
  );
};

export default TextWithBottomImage;
