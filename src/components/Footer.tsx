import Image from "next/image";


interface Props {
    language: any;
}

export default function Footer({language}: Props)  {
    return (
        <div className="footer-wrap">
            <div className="footer-container">
                <div className="content" id="content1">
                    <div className="footer-logo">
                        <Image src="/images/onetech-logo-white.png" alt="Wire Bio detan braces" width={150} height={65}/>
                        <div>
                            <p>O&apos;NETECH</p>
                            <p>{language?.Footer_01}</p>
                        </div>
                    </div>
                    <div className="footer-column-content">
                        <p>{language?.Footer_02}</p>
                        <p>{language?.Footer_03}</p>
                    </div>
                </div>
                <div className="content" id="content2">
                    <div>
                        <p>{language?.Footer_04}</p>
                    </div>
                    <div className="contact-item">
                        <div className={"contact-image"}>
                            <Image src="/images/address-icon.svg" alt="Wire Bio detan braces" width={40}
                                   height={40}/>
                        </div>
                        <div className={"contact-info"}>
                            <p>{language?.Footer_05}</p>
                            <p>{language?.Footer_06}</p>
                            <p>{language?.Footer_07}</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className={"contact-image"}>
                            <Image src="/images/tel-icon.svg" alt="Wire Bio detan braces" width={40}
                                   height={40}/>
                        </div>
                        <div className={"contact-info"}>
                            <p>{language?.Footer_08}</p>
                            <p>{language?.Footer_09}</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className={"contact-image"}>
                            <Image src="/images/email-icon.svg" alt="Wire Bio detan braces" width={40}
                                   height={40}/>
                        </div>
                        <div className={"contact-info"}>
                            <p>{language?.Footer_10}</p>
                            <p>{language?.Footer_11}</p>
                        </div>
                    </div>


                </div>
                <div className="content" id="content3">
                    <div>
                        <p>{language?.Footer_12}</p>
                        <hr/>
                    </div>
                    <div className={"quick-links"}>
                        <p><a href="#section2">{language?.Footer_13}</a></p>
                        <p><a href="#section4">{language?.Footer_14}</a></p>
                        <p><a href="#section1">{language?.Footer_15}</a></p>
                        <p><a href="#section5">{language?.Footer_16}</a></p>
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
