import { BASE_URL } from "@/config/config";


export const getMedia = async () => {
  const url = `${BASE_URL()}/api/frontend/social-media`;

  const res = await fetch(url, { next: { revalidate: 1200 } });

  return res.json();
};
