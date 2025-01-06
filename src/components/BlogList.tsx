'use client';

import Image from "next/image";
import Link from "next/link";
import api from "@/lib/api";
import {useState, useEffect} from "react";
import Paginate from "@/components/DotsAdmin/Paginate/paginate";

interface Props {
    language: any;
    page?: number;
}

export default function BlogList({language, page}: Props) {
    const [newsList, setNewsList] = useState<any[]>([]); // API 호출 결과
    const [totalCount, setTotalCount] = useState(0); // 총 아이템 수

    // API 호출 함수
    const fetchNews = async (searchKeyword?: string) => {
        const response = await api.get(
            `/user/promotion/getContentsList.php?contentType=1&businessDivisionType=0&userLang=${
                language.language === 'KR' ? 'EN' : 'KR'
            }&page=${page || 1}&size=10&keyword=${searchKeyword}&sortColumn=date&sortOrder=desc`
        );
        setNewsList(response?.data?.List || []);
        setTotalCount(response?.data?.totalCnt || 0);
    };

    useEffect(() => {
        fetchNews('');
    }, [page]);

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
                    </div>
                    <div className="blog-lists">
                        <ul>
                            {newsList.map((item: any, i: number) => (
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
                <Paginate page={page || 1} size={10} totalCount={totalCount} />
            </div>
        </>
    )
}
