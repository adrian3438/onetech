import "../../../asset/css/page.scss";
import Image from "next/image";
import Link from "next/link";
import {fetchLanguage} from "../../../util/fetchLanguage";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

export default async function Blog({searchParams : {lang}} : any) {
    const language = await fetchLanguage(lang);
    return (
        <>
            <Header language={language}/>
            <div className={"blog-section"}>
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
                    <div className={"blog-lists"}>
                        <ul>
                            <li className={"blog-items"}>
                                <div className={"blog-item-container"}>
                                    <Link href="/blog/1" className={"blog-content"}>
                                        <div className={"blog-image"}>
                                            <Image src="/images/blog-thumnail-image1.png"
                                                   alt="Bio Wire Coating Exhibition"
                                                   width={451} height={223}/>
                                        </div>
                                        <div className="blog-title">
                                            <p>Exhibition<Image src="/images/blog-navigation-arrow.png"
                                                                alt="blog navigation arrow" width={8} height={8}/>October
                                                02, 2024</p>
                                            <p>Bio wire coating Exhibition</p>
                                            <p><Image src="/images/blog-read-detail-button.png"
                                                      alt="Blog read detail button" width={43} height={43}/></p>

                                        </div>
                                    </Link>
                                </div>
                            </li>
                            <li className={"blog-items"}>
                                <div className={"blog-item-container"}>
                                    <Link href="/blog/1" className={"blog-content"}>
                                        <div className={"blog-image"}>
                                            <Image src="/images/blog-thumnail-image1.png"
                                                   alt="Bio Wire Coating Exhibition"
                                                   width={451} height={223}/>
                                        </div>
                                        <div className="blog-title">
                                            <p>Exhibition<Image src="/images/blog-navigation-arrow.png"
                                                                alt="blog navigation arrow" width={8} height={8}/>October
                                                02, 2024</p>
                                            <p>Bio wire coating Exhibition</p>
                                            <p><Image src="/images/blog-read-detail-button.png"
                                                      alt="Blog read detail button" width={43} height={43}/></p>

                                        </div>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer language={language}/>
        </>
    )
}
