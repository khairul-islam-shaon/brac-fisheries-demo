import { BASE_URL } from "@/config/config"

export const getNav = async()=>{
    const url = `${BASE_URL()}/api/frontend/menus`

    const res = await fetch(url, { next: { revalidate: 1200 } });

    return res.json()
}