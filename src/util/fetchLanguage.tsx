import axios from "axios";
import { cookies, headers } from "next/headers";

export async function fetchLanguage(searchLang: string) {
    const cookie = await cookies();
    const cookieLang = cookie.get('LANG') || { value: 'kr' };
    const acceptLang = (await headers()).get('accept-language')?.split(",")[0]?.slice(0, 2) || 'kr';

    const langValue = searchLang || cookieLang?.value || acceptLang;
    const host = (await headers()).get('host') || "bio-coating.kr";
    const protocol = process.env.NODE_ENV === "production" ? "https://" : "http://";

    try {
        console.log(`Fetching language from: ${protocol}${host}/api/lang?lang=${langValue}`);
        const response = await axios.get(`${protocol}${host}/api/lang?lang=${langValue}`);
        return response?.data;
    } catch (error) {
        console.error("Failed to fetch language data:", error);
        return null;
    }
}
