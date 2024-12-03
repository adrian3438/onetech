'use client';

import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import "swiper/css"
import "swiper/css/navigation"

interface Props {
    language: any
}

export default function CompanyIntroduction({language}: Props) {
    console.log('language : ', language);
    return (
        <>
            <Swiper
                className="mySwiper"
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
            >
                <SwiperSlide>
                    <div className="main-banner" style={{background: 'url(/images/bio-wire-dental-braces.png) no-repeat 50% 0'}}>
                        <div>
                            <div>
                                <p>국내 최초</p>
                                <p>Bio Wire <strong>치아 보정용 보철기</strong> 코팅</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="main-banner" style={{background: 'url(/images/banner-bg-02.png) no-repeat 50% 0'}}>
                        <div>
                            <div>
                                <p><strong>PVD</strong> (Physical Vapor Deposition) 과 </p>
                                <p><strong>Bio Coating</strong> 기술 융합</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="main-banner" style={{background: 'url(/images/banner-bg-03.png) no-repeat 50% 0'}}>
                        <div>
                            <div>
                                <p>세상에서 <strong>안심하고 사용할 수 있는</strong></p>
                                <p><strong>치아 보정용 보철기</strong> 코팅</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="company-intro-section" id="section1">
                <div className="company-intro-title">
                    <h1>회사소개</h1>
                    <hr/>
                </div>
                <div className="company-intro">
                    <div className="company-intro-image">
                        <Image src="/images/bio-wire-dental-braces2.png" alt="Wire Bio detan braces" width={718}
                               height={322}/>
                    </div>
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

                </div>
            </div>
        </>
    )
}
