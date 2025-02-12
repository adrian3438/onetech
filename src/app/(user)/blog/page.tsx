import "../../../asset/css/page.scss";
import {fetchLanguage} from "@/util/fetchLanguage";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import BlogList from "@/components/BlogList";

export default async function BlogPage({searchParams : {lang, page}} : any) {
    const language = await fetchLanguage(lang);
    console.log("language:", language);
    return (
        <>
            <Header language={language}/>
            <BlogList language={language} page={page || 1}/>
            <Footer language={language}/>
        </>
    )
}