'use client';

import Image from "next/image";
import {useState} from "react";

export default function BusinessDivision() {
    const [pictureIndex1, setPictureIndex1] = useState<number>(0);
    const [pictureIndex2, setPictureIndex2] = useState<number>(0);
    const [pictureIndex3, setPictureIndex3] = useState<number>(0);
    const [pictureIndex4, setPictureIndex4] = useState<number>(0);

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
                                <li className={pictureIndex1 === 0 ? 'active' : ''} onMouseOver={() => setPictureIndex1(0)}>바이오 와이어 코팅기술</li>
                                <li className={pictureIndex1 === 1 ? 'active' : ''} onMouseOver={() => setPictureIndex1(1)}>임플란트 코팅기술</li>
                                <li className={pictureIndex1 === 2 ? 'active' : ''} onMouseOver={() => setPictureIndex1(2)}>인공관절 코팅기술</li>
                            </ul>
                        </div>
                        <div>
                            {pictureIndex1 === 0 && <Image src="/images/bio-wire.png" alt="BIO Coating" width={690} height={303}/>}
                            {pictureIndex1 === 1 && <Image src="/images/implant-coating.png" alt="BIO Wire Coating" width={690} height={303}/>}
                            {pictureIndex1 === 2 && <Image src="/images/artificial-joint.png" alt="Implant Coating" width={690} height={303}/>}
                        </div>
                    </div>

                    <div className={"company-business-division-contents"}>
                        <div>
                            <p>세라믹 코팅기술</p>
                        </div>
                        <div>
                            <ul>
                                <li className={pictureIndex2 === 0 ? 'active' : ''} onMouseOver={() => setPictureIndex2(0)}>고온 소재용 코팅기술 (항공우주)</li>
                                <li className={pictureIndex2 === 1 ? 'active' : ''} onMouseOver={() => setPictureIndex2(1)}>연료전지 코팅기술</li>
                            </ul>
                        </div>
                        <div>
                            {pictureIndex2 === 0 && <Image src="/images/seramic-coating.png" alt="BIO Wire Coating" width={690} height={303}/>}
                            {pictureIndex2 === 1 && <Image src="/images/fuel-battery-coating.png" alt="BIO Coating" width={690} height={303}/>}
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
                                <li className={pictureIndex3 === 0 ? 'active' : ''} onMouseOver={() => setPictureIndex3(0)}>전력반도체용 방열기판</li>
                                <li className={pictureIndex3 === 1 ? 'active' : ''} onMouseOver={() => setPictureIndex3(1)}>LED 방열코팅기술</li>
                                <li className={pictureIndex3 === 2 ? 'active' : ''} onMouseOver={() => setPictureIndex3(2)}>액서서리</li>
                            </ul>
                        </div>
                        <div>
                            {pictureIndex3 === 0 && <Image src="/images/color-coating.png" alt="Implant Coating" width={690} height={303}/>}
                            {pictureIndex3 === 1 && <Image src="/images/seramic-coating.png" alt="BIO Wire Coating" width={690} height={303}/>}
                            {pictureIndex3 === 2 && <Image src="/images/bio-coating.png" alt="BIO Coating" width={690} height={303}/>}
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
                                <li className={pictureIndex4 === 0 ? 'active' : ''} onMouseOver={() => setPictureIndex4(0)}>내마모성 코팅기술</li>
                                <li className={pictureIndex4 === 1 ? 'active' : ''} onMouseOver={() => setPictureIndex4(1)}>공구 금형 식기 자동차베어링 사진</li>
                            </ul>
                        </div>

                        <div>
                            {pictureIndex4 === 0 && <Image src="/images/artificial-joint-coating.png" alt="Artificial Joint Coating" width={690} height={303}/>}
                            {pictureIndex4 === 1 && <Image src="/images/seramic-coating.png" alt="BIO Wire Coating" width={690} height={303}/>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
