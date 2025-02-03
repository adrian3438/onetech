import {fetchLanguage} from "@/util/fetchLanguage";
import '../../asset/css/page.scss'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
//import Facilities from "../../components/Facilities";
import Main from "@/components/pages/Main";

export default async function Home({searchParams : {lang, page}} : any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>

            <Main language={language} page={page}/>

            { /* Footer */}
            <Footer/>

        </>
    );

}
