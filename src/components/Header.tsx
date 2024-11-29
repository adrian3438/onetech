'use client'

import '../asset/css/page.scss'
import Image from "next/image";
import {useState} from "react";
export default function Header() {

    const [state, setState]=useState(1);

    function handleLanguage() {
        if (state === 1) {
            setState(2);
        } else {
            setState(1);
        }
    }

    function handleChangeLang( lang:string) {
        console.log(lang);
    }

    return (
        <div className="main-gnb-wrap">
            <div className="main-gnb">
                <div className="onetech-logo">
                    <Image src="/images/onetech-logo.png" alt="" width={150} height={65}/>
                    <div className="onetech-logo-contents">
                        <div className="onetech-logo-title1">O’NETECH</div>
                        <div className="onetech-logo-title2">진공코딩전문기업</div>
                    </div>

                </div>
                <div>
                    <ul className="menu-items">
                        <li>회사소개</li>
                        <li>사업분야</li>
                        <li>보유장비</li>
                        <li>블로그</li>
                        <li>문의하기</li>
                    </ul>
                </div>
                <div className="lang-selection">
                    <button onClick={()=>handleLanguage()}>KOR</button>
                    <ul className={`lang-box ${state===1 ? '' : 'active'}`}>
                        <li><button onClick={()=>handleChangeLang('KOR')}>KOR</button></li>
                        <li><button onClick={()=>handleChangeLang('ENG')}>ENG</button></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}