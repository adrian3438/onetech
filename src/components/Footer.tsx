import Image from "next/image";

export default function Footer() {
    return (
        <div className="footer-wrap">
            <div className="footer-container">
                <div className="content" id="content1">
                    <div className="footer-logo">
                        <Image src="/images/onetech-logo-white.png" alt="Wire Bio detan braces" width={150} height={65}/>
                        <div>
                            <p>O&apos;NETECH</p>
                            <p>진공코팅 전문기업</p>
                        </div>
                    </div>
                    <div className="footer-column-content">
                        <p>코팅 기술의 가장 큰 장점은 저가의 모재에 고기능성 박막을 피복시켜 소재의 부가가치를 획기적으로 향상시키고, 아울러 모재와 코팅층 간의 융합화를 통해 기존 소재에서는 구현할 수 없는 특성을 나타낼 수 있는 기술보유. </p>
                        <p>따라서 본 기술의 응용분야는 기존 기계, 광학, 반도체, 디스플레이, 배터리, 신재생 에너지, 데코레이션 분야는 물론이고 향후 의료 바이오, 로봇, 우주 항공 분야 기술 적용</p>
                    </div>
                </div>
                <div className="content" id="content2">
                    <div>
                        <p>Contact Info</p>
                    </div>
                    <div className="contact-item">
                        <div className={"contact-image"}>
                            <Image src="/images/address-icon.svg" alt="Wire Bio detan braces" width={40}
                                   height={40}/>
                        </div>
                        <div className={"contact-info"}>
                            <p>Address</p>
                            <p>경상남도 김해시 주촌면 골든루트로 80-59 테크노타운 701호</p>
                            <p>경상북도 영주시 풍기읍 동양대로 129 번길 70 304호</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className={"contact-image"}>
                            <Image src="/images/tel-icon.svg" alt="Wire Bio detan braces" width={40}
                                   height={40}/>
                        </div>
                        <div className={"contact-info"}>
                            <p>Call US</p>
                            <p>070-7543-7157</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className={"contact-image"}>
                            <Image src="/images/email-icon.svg" alt="Wire Bio detan braces" width={40}
                                   height={40}/>
                        </div>
                        <div className={"contact-info"}>
                            <p>Email US</p>
                            <p>sales@rnd1.co.kr</p>
                        </div>
                    </div>


                </div>
                <div className="content" id="content3">
                    <div>
                        <p>Quick Links</p>
                        <hr/>
                    </div>
                    <div className={"quick-links"}>
                        <p><a href="#">Technicals</a></p>
                        <p><a href="#">News</a></p>
                        <p><a href="#">Company</a></p>
                        <p><a href="#">Contact US</a></p>
                    </div>
                </div>
            </div>
            <div className="footer-copyright-line">
                <hr/>
                <p>
                    Copyright (C)OneTech 2024. All Rights Reserved.
                </p>
            </div>
        </div>
    )
}
