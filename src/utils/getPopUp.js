import { BASE_URL } from "@/config/config";


export const getPopUp = async () => {
  const url = `${BASE_URL()}/api/frontend/popup`;
    // console.log(url)
  const res = await fetch(url, { next: { revalidate: 120 } });
  // console.log(res)
  return res.json();
};
