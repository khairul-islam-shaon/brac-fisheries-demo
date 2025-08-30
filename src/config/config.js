import { finalVal } from "../../url";

export const BASE_URL = () => {
  let stage = "https://api-bracfish.com";
  let prod = "https://api.bracfisheries.net";

  if (finalVal === "development") {
    return stage;
  } 
  return prod;
};
