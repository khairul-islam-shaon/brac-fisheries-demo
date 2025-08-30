// DataFetcher.js
import React from "react";
import { getComponentDetails } from "@/utils/getComponentDetails";

const DataFetcher = async ({ id, Component }) => {
  // Fetch data based on the provided id
  // const data = await getComponentDetails(id);
  // const componentData = data?.data?.component;

  // Render the provided Component with the fetched data
  return <Component component={id} />;
};

export default DataFetcher;
