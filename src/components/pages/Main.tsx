import CompanyIntroduction from "@/components/CompanyIntroduction";
import CompanyHistory from "@/components/CompanyHistory";
import BusinessDivision from "@/components/BusinessDivision";
import EquipmentContent from "@/components/EquipmentContent";
import Blog from "@/components/Blog";
import ContactUs from "@/components/ContactUs";

interface Props {
    language?: any
    page?: any
}

export default function Main({language, page}: Props) {
    return(
        <>
            { /*main banner Start */}
            <CompanyIntroduction language={language}/>

            { /* Company History Section */}
            <CompanyHistory language={language}/>

            { /* business division - 사업분야 */}
            <BusinessDivision language={language}/>

            { /* 장비제조 기술 */}
            <EquipmentContent language={language}/>

            { /* 보유 장비 기술 */}
            {/*<Facilities/>*/}

            { /* 블로그 */}
            <Blog language={language} page={page || 1}/>

            { /* 문의하기 */}
            <ContactUs language={language}/>
        </>
    )
}
