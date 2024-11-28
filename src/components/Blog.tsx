import Image from "next/image";

export default function Blog() {
    return (
        <>
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
                        <div>
                            <Image src="/images/view-all.png" alt="Wire Bio detan braces" width={179} height={37}/>
                        </div>
                    </div>
                    <div className={"blog-lists"}>
                        <ul>
                            <li className={"blog-items"}>
                                <div className={"blog-item-container"}>
                                    <div className={"blog-content"}>
                                        <div className="blog-title">
                                            <p>Exhibition<Image src="/images/blog-navigation-arrow.png"
                                                                alt="blog navigation arrow" width={8} height={8}/>October
                                                02, 2024</p>
                                            <p>Bio wire coating Exhibition</p>
                                            <p><Image src="/images/blog-read-detail-button.png"
                                                      alt="Blog read detail button" width={43} height={43}/></p>
                                        </div>
                                        <div className={"blog-image"}>
                                            <Image src="/images/blog-thumnail-image1.png"
                                                   alt="Bio Wire Coating Exhibition"
                                                   width={451} height={223}/>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className={"blog-items"}>
                                <div className={"blog-item-container"}>
                                    <div className={"blog-content"}>
                                        <div className="blog-title">
                                            <p>Exhibition<Image src="/images/blog-navigation-arrow.png"
                                                                alt="blog navigation arrow" width={8} height={8}/>October
                                                02, 2024</p>
                                            <p>Bio wire coating Exhibition</p>
                                            <p><Image src="/images/blog-read-detail-button.png"
                                                      alt="Blog read detail button" width={43} height={43}/></p>
                                        </div>
                                        <div className={"blog-image"}>
                                            <Image src="/images/blog-thumnail-image1.png"
                                                   alt="Bio Wire Coating Exhibition"
                                                   width={451} height={223}/>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}