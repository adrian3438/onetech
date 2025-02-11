'use client';

import Image from "next/image";
import {useState} from "react";

interface Props {
    language?:any
}

export default function BusinessDivision({language} : Props) {
    const [pictureIndex1, setPictureIndex1] = useState<number>(0);
    const [pictureIndex2, setPictureIndex2] = useState<number>(0);
    const [pictureIndex3, setPictureIndex3] = useState<number>(0);
    const [pictureIndex4, setPictureIndex4] = useState<number>(0);

    return (
        <>
            <div className={"company-business-division-section"} id="section2">

                <div className="company-business-division-title">
                    <h1>{language?.Division_01}</h1>
                    <hr/>
                </div>
                <div className="company-business-division-container">
                    <div className={"company-business-division-contents"}>
                        <div>
                            <p>{language?.Division_02}</p>
                        </div>
                        <div>
                            <ul>
                                <li className={pictureIndex1 === 0 ? 'active' : ''} onMouseOver={() => setPictureIndex1(0)}>{language?.Division_03}</li>
                                <li className={pictureIndex1 === 1 ? 'active' : ''} onMouseOver={() => setPictureIndex1(1)}>{language?.Division_04}</li>
                                <li className={pictureIndex1 === 2 ? 'active' : ''} onMouseOver={() => setPictureIndex1(2)}>{language?.Division_05}</li>
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
                            <p>{language?.Division_06}</p>
                        </div>
                        <div>
                            <ul>
                                <li className={pictureIndex2 === 0 ? 'active' : ''} onMouseOver={() => setPictureIndex2(0)}>{language?.Division_07}</li>
                                <li className={pictureIndex2 === 1 ? 'active' : ''} onMouseOver={() => setPictureIndex2(1)}>{language?.Division_08}</li>
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
                            {language?.Division_09}
                            </p>
                        </div>
                        <div>
                            <ul>
                                <li className={pictureIndex3 === 0 ? 'active' : ''} onMouseOver={() => setPictureIndex3(0)}>{language?.Division_08}</li>
                                <li className={pictureIndex3 === 1 ? 'active' : ''} onMouseOver={() => setPictureIndex3(1)}>{language?.Division_09}</li>
                                <li className={pictureIndex3 === 2 ? 'active' : ''} onMouseOver={() => setPictureIndex3(2)}>{language?.Division_10}</li>
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
                            {language?.Division_11}
                            </p>
                        </div>
                        <div>
                            <ul>
                                <li className={pictureIndex4 === 0 ? 'active' : ''} onMouseOver={() => setPictureIndex4(0)}>{language?.Division_12}</li>
                                <li className={pictureIndex4 === 1 ? 'active' : ''} onMouseOver={() => setPictureIndex4(1)}>{language?.Division_13}</li>
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
