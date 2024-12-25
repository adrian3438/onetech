import Image from "next/image";

export default function BusinessDivision() {
    return (
        <>
            <div className={"company-business-division-section"} id="section2">

                <div className="company-business-division-title">
                    <h1>사업 분야</h1>
                    <hr/>
                </div>
                <div className="company-business-division-container">
                    <div className={"company-business-division-contents"}>
                        <div>
                            <p>생체 (BIO-Coating 기술)</p>
                        </div>
                        <div>
                            <ul>
                                <li>바이오 와이어 코팅기술</li>
                                <li>임플란트 코팅기술</li>
                                <li>인공관절 코팅기술</li>
                            </ul>
                        </div>
                        <div>
                            <Image src="/images/bio-coating.png" alt="BIO Coating" width={690} height={303}/>
                        </div>
                    </div>

                    <div className={"company-business-division-contents"}>
                        <div>
                            <p>세라믹 코팅기술</p>
                        </div>
                        <div>
                            <ul>
                            <li>고온 소재용 코팅기술 (항공우주)</li>
                                <li>연료전지 코팅기술</li>
                            </ul>
                        </div>
                        <div>
                            <Image src="/images/seramic-coating.png" alt="BIO Wire Coating" width={690} height={303}/>
                        </div>
                    </div>

                    <div className={"company-business-division-contents"}>
                        <div>
                            <p>
                                색상구현 코팅기술
                            </p>
                        </div>
                        <div>
                            <ul>
                                <li>전력반도체용 방열기판</li>
                                <li>LED 방열코팅기술</li>
                                <li>액서서리</li>
                            </ul>
                        </div>
                        <div>
                            <Image src="/images/color-coating.png" alt="Implant Coating" width={690} height={303}/>
                        </div>
                    </div>

                    <div className={"company-business-division-contents"}>
                        <div>
                            <p>
                                기타코팅기술
                            </p>
                        </div>
                        <div>
                            <ul>
                            <li>내마모성 코팅기술</li>
                                <li>공구 금형 식기 자동차베어링 사진</li>
                            </ul>
                        </div>

                        <div>
                            <Image src="/images/artificial-joint-coating.png" alt="Artificial Joint Coating" width={690}
                                   height={303}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
