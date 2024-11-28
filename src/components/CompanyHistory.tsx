export default function CompanyHistory() {
    return (
        <>
            <div className="company-history-section">
                <div className="company-history-title">
                    <h1>연혁</h1>
                    <hr/>
                </div>

                <div className="company-history-wrap">
                    <div className="company-history-image">
                        <div>
                            <p>Better life with</p>
                            <p>Bio-dental Coating</p>
                        </div>
                    </div>
                    <div className="company-history-contents">
                        <div>
                            <ul>
                                <li>
                                    <p>2026</p>
                                    <ul className={"history-monthly-content"}>
                                        <li><span>08</span> 펜타플렉스 메트로 지식 산업 센타 입주 확정</li>
                                    </ul>
                                </li>
                                <li>
                                    <p>2024</p>
                                    <ul className={"history-monthly-content"}>
                                        <li><span>05</span> 인체 적합성 코팅기술 생체 재료용 특허출원</li>
                                        <li><span>04</span> 경북 테크노파크 소재경량센터 입주기업 선정</li>
                                    </ul>
                                </li>
                                <li>
                                    <p>2022</p>
                                    <ul className={"history-monthly-content"}>
                                        <li><span>05</span> 산자부 주관 해외시장 타당성 사업 선정</li>
                                        <li><span>02</span> 산자부 주관 IP지원 사업 선정</li>
                                    </ul>
                                </li>
                                <li>
                                    <p>2020</p>
                                    <ul className={"history-monthly-content"}>
                                        <li><span>08</span> 인공관절 및 제조방법 특허 보유</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}