const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function getNews() {
    const res = await fetch(`${STRAPI_URL}/api/news?populate=*`, {
        next: { revalidate: 10},
    });
    if (!res.ok) throw new Error("Failed to fetch news.");
    const data = await res.json()
    return data.data
}