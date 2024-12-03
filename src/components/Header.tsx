'use client'

import '../asset/css/page.scss'
import Image from "next/image";
import {useEffect, useState} from "react";
import { useCookies } from "react-cookie";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import Link from "next/link";

interface Props {
    language: any
}
export default function Header({language}: Props) {
    const [visibleMenu, setVisibleMenu] = useState<boolean>(false);
    const openMobileMenu = () => {
        setVisibleMenu(true);
    }
    const closeMobileMenu = () => {
        setVisibleMenu(false);
    }

    const [state, setState]=useState(1);
    function handleLanguage() {
        if (state === 1) {
            setState(2);
        } else {
            setState(1);
        }
    }

    const router = useRouter();
    const query = useSearchParams();
    const currentRoute = usePathname();
    const [cookie , setCookie] = useCookies(['LANG']);
    const [lang , setLang] = useState<any>('kr');

    function handleChangeLang( lang:string) {
        setCookie('LANG', lang, {path : '/'});

        // 언어 변경 시 , url 변경
        const newParams = new URLSearchParams(query.toString());
        newParams.set('lang', lang);
        router.push(`${currentRoute}?${newParams?.toString()}`);
    }
    useEffect(()=>{setLang(cookie.LANG)} , [setCookie, cookie]);

    return (
        <div className="main-gnb-wrap">
            <div className="main-gnb">
                <div className="onetech-logo">
                    <Link href="/"><Image src="/images/onetech-logo.png" alt="" width={150} height={65}/></Link>
                    <div className="onetech-logo-contents">
                        <div className="onetech-logo-title1">O’NETECH</div>
                        <div className="onetech-logo-title2">진공코딩전문기업</div>
                    </div>
                </div>
                <div>
                    <ul className="menu-items">
                        <li><Link href="#section1">{language?.header_01}</Link></li>
                        <li><Link href="#section2">{language?.header_02}</Link></li>
                        <li><Link href="#section3">{language?.header_03}</Link></li>
                        <li><Link href="#section4">{language?.header_04}</Link></li>
                        <li><Link href="#section5">{language?.header_05}</Link></li>
                    </ul>
                </div>
                <div className="lang-selection">
                    <button onClick={() => handleLanguage()}>{lang === 'kr' ? 'KOR' : 'ENG'}</button>
                    <ul className={`lang-box ${state === 1 ? '' : 'active'}`}>
                        <li>
                            <button onClick={() => handleChangeLang('kr')}>KOR</button>
                        </li>
                        <li>
                            <button onClick={() => handleChangeLang('en')}>ENG</button>
                        </li>
                    </ul>
                    <button className="menu-button" onClick={openMobileMenu}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </button>
                </div>


                {/* Mobile Menu */}
                <nav className={visibleMenu ? "on" : ''}>
                    <div className="nav-header">
                        <Image src="/images/onetech-logo.png" alt="" width={150} height={65}/>
                        <button className="close" onClick={closeMobileMenu}></button>
                    </div>
                    <ul>
                        <li onClick={closeMobileMenu}><Link href="#section1">{language?.header_01}</Link></li>
                        <li onClick={closeMobileMenu}><Link href="#section2">{language?.header_02}</Link></li>
                        <li onClick={closeMobileMenu}><Link href="#section3">{language?.header_03}</Link></li>
                        <li onClick={closeMobileMenu}><Link href="#section4">{language?.header_04}</Link></li>
                        <li onClick={closeMobileMenu}><Link href="#section5">{language?.header_05}</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
