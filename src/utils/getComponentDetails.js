import { BASE_URL } from "@/config/config";

export const getComponentDetails = async (id) => {

    // console.log(`${BASE_URL()}/api/frontend/pages/details?component_id=${id}`);

    const res = await fetch(`${BASE_URL()}/api/frontend/pages/details?component_id=${id}`,{ next: { revalidate: 1200 }});
    // if (!res.ok) {

    //   throw new Error("Failed to fetch data")
    // }
    return res.json();
};
