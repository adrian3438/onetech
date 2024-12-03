import "../../../../asset/css/page.scss";
import Link from "next/link";
import {fetchLanguage} from "../../../../util/fetchLanguage";
import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";

export default async function BlogDetail({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>
            <section className="blog-detail">
                <div className="content-detail">
                    <section className="content-detail-header">
                        <h3>타이틀이 들어갑니다.</h3>
                        <p className="date">2024-10-24</p>
                    </section>
                    <section className="detail">
                        내용이 들어갑니다.
                    </section>
                    <div className="title-list">
                        <div>
                            <span>이전글</span>
                            <Link href="#">이전글 타이틀 입니다.</Link>
                        </div>
                        <div>
                            <span>다음글</span>
                            <Link href="#">다음글 없음</Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer language={language}/>
        </>
    )
}
