'use client';

import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import "swiper/css"
import "swiper/css/navigation"

interface Props {
    language?:any
}

export default function CompanyIntroduction({language} : Props)  {
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
                                <p>{language?.CompanyIntroduction_01}</p>
                                <p>{language?.CompanyIntroduction_02} <strong>{language?.CompanyIntroduction_03}</strong> {language?.CompanyIntroduction_04}</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="main-banner" style={{background: 'url(/images/banner-bg-02.png) no-repeat 50% 0'}}>
                        <div>
                            <div>
                                <p><strong>{language?.CompanyIntroduction_05}</strong>{language?.CompanyIntroduction_06}</p>
                                <p><strong>{language?.CompanyIntroduction_07}</strong>{language?.CompanyIntroduction_08}</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="main-banner" style={{background: 'url(/images/banner-bg-03.png) no-repeat 50% 0'}}>
                        <div>
                            <div>
                                <p>{language?.CompanyIntroduction_09}<strong>{language?.CompanyIntroduction_10}</strong></p>
                                <p><strong>{language?.CompanyIntroduction_11}</strong>{language?.CompanyIntroduction_12}</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="company-intro-section" id="section1">
                <div className="company-intro-title">
                    <h1>{language?.CompanyIntroduction_13}</h1>
                    <hr/>
                </div>
                <div className="company-intro">
                    <div className="company-intro-image">
                        <Image src="/images/bio-wire-dental-braces2.png" alt="Wire Bio detan braces" width={718}
                               height={322}/>
                    </div>
                    <div className="company-intro-contents">
                        <p>
                            <strong>{language?.CompanyIntroduction_14}</strong>{language?.CompanyIntroduction_15}
                        </p>
                        <p>{language?.CompanyIntroduction_16}<strong>{language?.CompanyIntroduction_17}</strong>{language?.CompanyIntroduction_18}
                        </p>
                        <p>
                            <strong>{language?.CompanyIntroduction_19}</strong>{language?.CompanyIntroduction_20}
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}
