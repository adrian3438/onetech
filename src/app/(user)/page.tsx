import {fetchLanguage} from "@/util/fetchLanguage";
import '../../asset/css/page.scss'
import Header from "../../components/Header";
import Main from "@/components/pages/Main";
import Footer from "../../components/Footer";

export default async function Home({searchParams : {lang, page}} : any) {
    const language = await fetchLanguage(lang);

    return (
        <>
            <Header language={language}/>

            <Main language={language} page={page}/>

            { /* Footer */}
            <Footer language={language}/>

        </>
    );

}
