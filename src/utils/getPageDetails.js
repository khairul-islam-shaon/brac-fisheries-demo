import { BASE_URL } from "@/config/config";

export const getPageDetails = async (slug) => {
    const res = await fetch(`${BASE_URL()}/api/frontend/${slug}`, {
      next: { revalidate: 1200 },
    });

    // if (!res.ok) {

    //   throw new Error("Failed to fetch data")
    // }

    return res.json();
};
