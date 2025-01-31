import '../../asset/css/page.scss'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import EquipmentContent from "../../components/EquipmentContent";
//import Facilities from "../../components/Facilities";
import Blog from "../../components/Blog";
import ContactUs from "../../components/ContactUs";
import BusinessDivision from "../../components/BusinessDivision";
import CompanyHistory from "../../components/CompanyHistory";
import CompanyIntroduction from "../../components/CompanyIntroduction";
import {fetchLanguage} from "../../util/fetchLanguage";

export default async function Home({searchParams : {lang, page}} : any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>

            { /*main banner Start */}
            <CompanyIntroduction language={language}/>

            { /* Company History Section */}
            <CompanyHistory/>

            { /* business division - 사업분야 */}
            <BusinessDivision/>

            { /* 장비제조 기술 */}
            <EquipmentContent/>

            { /* 보유 장비 기술 */}
            {/*<Facilities/>*/}

            { /* 블로그 */}
            <Blog language={language} page={page || 1}/>

            { /* 문의하기 */}
            <ContactUs language={language}/>

            { /* Footer */}
            <Footer language={language}/>

        </>
    );

}
