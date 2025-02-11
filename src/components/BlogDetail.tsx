import Link from "next/link";
import api from "@/lib/api";

interface Props {
    language: any,
    id?: any
}

export default async function BlogDetail({language, id}: Props) {
    const response = await api.get(`/user/promotion/getContentDetail2.php?ID=${id}&contentType=1&userLang=${language.lang === 'kr' ? 'KR' : 'EN'}`);
    const newsDetailData = response?.data;

    return (
        <section className="blog-detail">
            <div className="content-detail">
                <section className="content-detail-header">
                    <h3>{newsDetailData?.List[0]?.promSubject}</h3>
                    <p className="date">2024-10-24</p>
                </section>
                <section className="detail" dangerouslySetInnerHTML={{
                    __html: newsDetailData?.List[0]?.description
                }}>
                </section>
                <div className="title-list">
                    <div>
                        <span>{language?.BlogDetail_01}</span>
                        {newsDetailData?.prev[0]?.prevUrl === '' ? '이전글 없음' : <Link href={newsDetailData?.prev[0]?.prevUrl}>{newsDetailData?.prev[0]?.prevSubject}</Link>}
                    </div>
                    <div>
                        <span>{language?.BlogDetail_02}</span>
                        {newsDetailData?.next[0]?.nextUrl === '' ? '다음글 없음' : <Link href={newsDetailData?.next[0]?.nextUrl}>{newsDetailData?.next[0]?.nextSubject}</Link>}
                    </div>
                </div>
            </div>
        </section>
    )
}
