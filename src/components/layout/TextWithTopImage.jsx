import React from "react";
import TextWithTopImageContent from "./TextWithTopImageContent";
import { getComponentDetails } from "@/utils/getComponentDetails";

const TextWithTopImage = async ({ id }) => {
  const data = await getComponentDetails(id);
  const componentData = data.data;
  return <><TextWithTopImageContent component = {componentData?.component}/></>;
};

export default TextWithTopImage;
