import Image from "next/image";

export default function BusinessDivision() {
    return (
        <>
            <div className={"company-business-division-section"}>

                <div className="company-business-division-title">
                    <h1>사업 분야</h1>
                    <hr/>
                </div>
                <div className="company-business-division-container">
                    <div className={"company-business-division-contents"}>
                        <p>
                            생체 (BIO-Coating 기술)
                        </p>
                        <div>
                            <Image src="/images/bio-coating.png" alt="BIO Coating" width={690} height={303}/>
                        </div>
                    </div>

                    <div className={"company-business-division-contents"}>
                        <p>
                            바이오 와이어 코팅 기술
                        </p>
                        <div>
                            <Image src="/images/bio-wire-coating.png" alt="BIO Wire Coating" width={690} height={303}/>
                        </div>
                    </div>

                    <div className={"company-business-division-contents"}>
                        <p>
                            임플란트 코팅 기술
                        </p>
                        <div>
                            <Image src="/images/implant-coating.png" alt="Implant Coating" width={690} height={303}/>
                        </div>
                    </div>

                    <div className={"company-business-division-contents"}>
                        <p>
                            인공관절 코팅 기술
                        </p>
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