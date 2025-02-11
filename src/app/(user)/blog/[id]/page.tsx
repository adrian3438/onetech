import "../../../../asset/css/page.scss";
import {fetchLanguage} from "@/util/fetchLanguage";
import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import BlogDetail from "@/components/BlogDetail";

interface ParamsType {
    params: { id: string | undefined };
    searchParams: { lang: any };
}

export default async function BlogDetailPage({ searchParams: { lang }, params: { id } }: ParamsType) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>
            <BlogDetail language={language} id={id}/>
            <Footer language={language}/>
        </>
    )
}
