import Image from "next/image";
import Link from "next/link";
import api from "@/lib/api";

interface Props {
    language: any;
    page?: number;
}

export default async function Blog({language, page}: Props) {
    const res = await api.get(
        `/user/promotion/getContentsList.php?contentType=1&userLang=${language.lang === 'kr' ? 'KR' : 'EN'}&page=${page || 1}&size=3&sortColumn=date&sortOrder=desc`);

    return (
        <>
            <div className={"blog-section"} id="section4">
                <div className={"blog-header-title"}>
                    <h1>블로그</h1>
                    <hr/>
                </div>

                <div className={"blog-container"}>
                    <div className={"blog-header"}>
                        <div>
                            <p>Get Latest News & Updates</p>
                        </div>
                        <div>
                            <Link href="/blog"><Image src="/images/view-all.png" alt="Wire Bio detan braces" width={179} height={37}/></Link>
                        </div>
                    </div>
                    <div className="blog-lists">
                        <ul>
                            {res?.data?.List?.map((item: any, i: number) => (
                                <li key={i} className="blog-items">
                                    <div className={"blog-item-container"}>
                                        <Link href={`/blog/${item?.ID}`} className={"blog-content"}>
                                            <div className={"blog-image"}>
                                                <Image src={item?.thumnailFile}
                                                       alt={item?.promSubject}
                                                       width={451} height={223}/>
                                            </div>
                                            <div className="blog-title">
                                                <p>Exhibition <Image src="/images/blog-navigation-arrow.png" alt="blog navigation arrow" width={8} height={8}/> {item?.createDate}</p>
                                                <p>{item?.promSubject}</p>
                                                <p><Image src="/images/blog-read-detail-button.png" alt="Blog read detail button" width={43} height={43}/></p>
                                            </div>
                                        </Link>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}
