import {fetchLanguage} from "@/util/fetchLanguage";
import '../../asset/css/page.scss'
import Header from "../../components/Header";
import Main from "@/components/pages/Main";
import Footer from "../../components/Footer";

interface Props {
    language?: any
    searchParams?: any
}

export default async function Home({searchParams : {lang, page}} : Props) {
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
