import Image from "next/image";

export default function CompanyIntroduction() {
    return (
        <>
            <div className="main-banner">
                <div>
                    <div>
                        <p>국내 최초</p>
                        <p><strong>Bio Wire 치아 보정용 보철기 코팅</strong></p>
                    </div>
                </div>
            </div>

            <div className="company-intro-section">
                <div className="company-intro-title">
                    <h1>회사소개</h1>
                    <hr/>
                </div>
                <div className="company-intro">
                    <div className="company-intro-contents">
                        <p>
                            <strong>진공코팅 코팅 기술</strong>은 기존 소재가 가지고 있는 단점을 획기적으로 개선할 수 있는 기술로서 경도나 강도가 낮은 저가의 금속 소재 위에
                            내마모성, 내 부식성이 우수하며 다양한 색상을 구현하여 심미성이 뛰어난 세라믹 소재를 코팅시킴으로서 제품의 부가가치를 증대시킬 수 있음.
                        </p>
                        <p>진공 코팅 을 실현하는데 필요한 기술로는 저온에서 세라믹 물질을 합성할 수 있는 <strong>물리증착법 (Physical Vapor Deposition : 이하
                            PVD)</strong>을 이용하여 저가의 일반 탄소강 또는 고경도 스테인레스 강에 모재보다 5~10배 이상 높은 세라믹 물질 (예: TiN, TiCrN, ZrN,
                            TiZrN, TiCN,
                            TiAlN 등)을 1~3μm 두께로 피복시키는 것이 기본 기술임.
                        </p>
                        <p>
                            <strong>PVD 코팅</strong>에서 제품 품질을 결정하는 중요한 인자 중의 하나는 모재 와 코팅층간의 밀착력 향상 기술임. 본 연구 개발에서는 이러한
                            밀착력 향상 기술에 대한 고유한
                            전처리 기술인 고밀도 플라즈마 응용 기술을 이용하여 세라믹 코팅 전에 모재 에 존재하고 있는 오염물질이나 산화물질을 고밀도 플라즈마 공정을 이용하여 효과적으로
                            제거하고 아울러 모재 표면을 활성화 시킴으로서 코팅 층과 모재와의 밀착력을 극대화시킬 수 있는 기술을 사용하고자 함.
                        </p>
                    </div>
                    <div>
                        <Image src="/images/bio-wire-dental-braces2.png" alt="Wire Bio detan braces" width={718}
                               height={322}/>
                    </div>
                </div>
            </div>
        </>
    )
}