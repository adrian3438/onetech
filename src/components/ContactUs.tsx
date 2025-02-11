'use client';

import api from "@/lib/api";
import {useState} from "react";

interface Props {
    language: any;
}

export default function ContactUs({language}: Props) {
    const [data, setData] = useState<any>({
        company: '',
        name: '',
        position: '',
        phone: '',
        email: '',
        type: '',
        title: '',
        message: '',
        attachedFile: null,
        agreeTerms: "N",
        adAgree: "N"
    })
    const [isCheck, setCheck] = useState<boolean>(false)
    const [isAdCheck, setAdCheck] = useState<boolean>(false)
    const [fileName, setFileName] = useState<string>('')
    const [preview, setPreview] = useState<any>(null);

    function handleChange(e: any) {
        const {name, type, value, files} = e.target
        if (type === 'file') {
            const reader = new FileReader()
            if (files[0]) {
                reader.readAsDataURL(files[0])
            }
            reader.onload = () => {
                setData((prev: any) => ({...prev, [name]: files[0]}))
                if (name === 'attachedFile') {
                    setFileName(files[0].name)
                } else {
                    setPreview(reader.result)
                }
            }
        } else {
            setData((prev: any) => ({...prev, [name]: value}))
        }
    }

    async function save() {
        if (!data?.company) {
            alert(language?.Contact_01);
            return;
        }
        if (!data?.name) {
            alert(language?.Contact_02);
            return;
        }
        if (!data?.position) {
            alert(language?.Contact_03);
            return;
        }
        if (!data?.phone) {
            alert(language?.Contact_04);
            return;
        }
        if (!data?.email) {
            alert(language?.Contact_05);
            return;
        }
        if (!data?.type) {
            alert(language?.Contact_06);
            return;
        }
        if (!data?.title) {
            alert(language?.Contact_07);
            return;
        }
        if (!data?.message) {
            alert(language?.Contact_08);
            return;
        }
        if (!isCheck) {
            alert(language?.Contact_09);
            return;
        }

        try {
            const formData = new FormData()
            formData.append('companyName', data?.company)
            formData.append('inquiryName', data?.name)
            formData.append('inquiryPosition', data?.position)
            formData.append('inquiryEmail', data?.email)
            formData.append('inquiryPhone', data?.phone)
            formData.append('inquiryType', data?.type)
            formData.append('inquirySubject', data?.title)
            formData.append('inquiryContents', data?.message)
            formData.append('inquiryLang ', language.lang === "kr" ? "KR" : "EN");
            if (data?.attachedFile) {
                formData.append('attachedFile', data?.attachedFile)
            }
            formData.append('privacyAgree', isCheck ? 'Y' : 'N')
            formData.append('advertiseAgree', isAdCheck ? 'Y' : 'N');
            const response = await api.post(`/user/inquiry/setInquiry.php`, formData)
            if (response?.data?.result === true) {
                alert(response?.data?.resultMsg);
            } else {
                alert(response?.data?.resultMsg)
            }
        } catch {
            alert(language?.Contact_10);
        }
    }

    return (
        <>
            <div className={"contact-section"} id="section5">
                <div className={"contact-header-title"}>
                    <h1>{language?.Contact_11}</h1>
                    <hr/>
                </div>
                <div className={"contact-wrap"}>
                    <div className={"contact-wrap-title"}>
                        <p>{language?.Contact_12}</p>
                        <p>{language?.Contact_13}</p>
                    </div>
                    <form method={"post"}>
                        <fieldset className="customer-info">
                            <legend><span>01</span> {language?.Contact_14}</legend>
                            <div>
                                <div>
                                    <label htmlFor="companyName">{language?.Contact_15}</label>
                                    <input type="text" id="companyName" placeholder={language?.Contact_16} name="company" onChange={handleChange}/>
                                </div>
                                <div>
                                    <label htmlFor="name">{language?.Contact_17}</label>
                                    <input type="text" id="name" placeholder={language?.Contact_18} name="name" onChange={handleChange}/>
                                </div>
                                <div>
                                    <label htmlFor="positionName">{language?.Contact_19}</label>
                                    <input type="text" id="positionName" placeholder={language?.Contact_20} name="position" onChange={handleChange}/>
                                </div>
                                <div>
                                    <label htmlFor="phoneNumber">{language?.Contact_21}</label>
                                    <input type="text" id="phoneNumber" placeholder={language?.Contact_22} name="phone" onChange={handleChange}/>
                                </div>
                                <div>
                                    <label htmlFor="email">{language?.Contact_23}</label>
                                    <input type="text" id="email" placeholder={language?.Contact_24} name="email" onChange={handleChange}/>
                                </div>
                            </div>
                        </fieldset>
                        <div className="submit">
                            <button type="button" id="goSubmit" onClick={save}>{language?.Contact_25}</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
