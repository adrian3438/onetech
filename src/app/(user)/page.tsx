import '../../asset/css/page.scss'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import EquipmentContent from "../../components/EquipmentContent";
import Facilities from "../../components/Facilities";
import Blog from "../../components/Blog";
import ContactUs from "../../components/ContactUs";
import BusinessDivision from "../../components/BusinessDivision";
import CompanyHistory from "../../components/CompanyHistory";
import CompanyIntroduction from "../../components/CompanyIntroduction";

export default function Home() {
    return (
        <>
            <Header/>

            { /*main banner Start */}
            <CompanyIntroduction/>

            { /* Company History Section */}
            <CompanyHistory/>

            { /* business division - 사업분야 */}
            <BusinessDivision/>

            { /* 장비제조 기술 */}
            <EquipmentContent/>

            { /* 보유 장비 기술 */}
            {/*<Facilities/>*/}

            { /* 블로그 */}
            <Blog/>

            { /* 문의하기 */}
            <ContactUs/>

            { /* Footer */}
            <Footer/>

        </>
    );

}
