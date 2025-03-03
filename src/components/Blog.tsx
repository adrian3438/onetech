import Image from "next/image";
import Link from "next/link";
import api from "@/lib/api";

interface Props {
    language: any;
    page?: number;
}

export default async function Blog({language, page}: Props) {
    let blogList: any[] = [];

    try {
        const res = await api.get(
            `/user/promotion/getContentsList.php?contentType=1&userLang=${language.lang === 'kr' ? 'KR' : 'EN'}&page=${page || 1}&size=3&sortColumn=date&sortOrder=desc`
        );

        // 데이터가 정상적으로 존재하는지 확인 후 저장
        blogList = res?.data?.List || [];
    } catch (error) {
        console.error("블로그 데이터를 불러오는 중 오류 발생:", error);
        blogList = [];
    }

    return (
        <>
            <div className={"blog-section"} id="section4">
                <div className={"blog-header-title"}>
                    <h1>{language?.Blog_01}</h1>
                    <hr/>
                </div>

                <div className={"blog-container"}>
                    <div className={"blog-header"}>
                        <div>
                            <p>{language?.Blog_02}</p>
                        </div>
                        <div>
                            <Link href="/blog"><Image src="/images/view-all.png" alt="Wire Bio detan braces" width={179} height={37}/></Link>
                        </div>
                    </div>
                    <div className="blog-lists">
                        {blogList?.length > 0 && (
                            <ul>
                                {blogList?.map((item: any, i: number) => (
                                    <li key={i} className="blog-items">
                                        <div className={"blog-item-container"}>
                                            <Link href={`/blog/${item?.ID}`} className={"blog-content"}>
                                                <div className={"blog-image"}>
                                                    <Image src={item?.thumnailFile}
                                                           alt={item?.promSubject}
                                                           width={451} height={223}/>
                                                </div>
                                                <div className="blog-title">
                                                    <p>{language?.Blog_03} <Image src="/images/blog-navigation-arrow.png" alt="blog navigation arrow" width={8} height={8}/> {item?.createDate}</p>
                                                    <p>{item?.promSubject}</p>
                                                    <p><Image src="/images/blog-read-detail-button.png" alt="Blog read detail button" width={43} height={43}/></p>
                                                </div>
                                            </Link>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                </div>
            </div>
        </>
    )
}
