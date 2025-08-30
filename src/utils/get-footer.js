import { BASE_URL } from "@/config/config";



export const getFooter = async (slug) => {
  const url = `${BASE_URL()}/api/frontend/${slug}`;

  // console.log(url,7)

  const res = await fetch(url, { next:{revalidate:1200}});

  return res.json();
};
