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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
            alert('회사명을 입력해 주시기 바랍니다.');
            return;
        }
        if (!data?.name) {
            alert('이름을 입력해 주시기 바랍니다.');
            return;
        }
        if (!data?.position) {
            alert('직급을 입력해 주시기 바랍니다.');
            return;
        }
        if (!data?.phone) {
            alert('연락처를 입력해 주시기 바랍니다.');
            return;
        }
        if (!data?.email) {
            alert('이메일을 입력해 주시기 바랍니다.');
            return;
        }
        if (!data?.type) {
            alert('사업분야를 선택해주시기 바랍니다.');
            return;
        }
        if (!data?.title) {
            alert('문의 제목을 입력해주시기 바랍니다.');
            return;
        }
        if (!data?.message) {
            alert('문의 내용을 입력해 주시기 바랍니다.');
            return;
        }
        if (!isCheck) {
            alert('개인정보 수집 및 이용동의를 체크해주시기 바랍니다.');
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
            alert('Server Error')
        }
    }

    return (
        <>
            <div className={"contact-section"} id="section5">
                <div className={"contact-header-title"}>
                    <h1>{language?.inquiry_01}</h1>
                    <hr/>
                </div>
                <div className={"contact-wrap"}>
                    <div className={"contact-wrap-title"}>
                        <p>궁금하신 사항이 있으신 경우 문의를 남겨주세요.</p>
                        <p>* 모든 항목 필수 입력사항입니다.</p>
                    </div>
                    <form method={"post"}>
                        <fieldset className="customer-info">
                            <legend><span>01</span> 문의하시는 고객님의 정보를 기입해 주세요</legend>
                            <div>
                                <div>
                                    <label htmlFor="companyName">회사명</label>
                                    <input type="text" id="companyName" placeholder="회사명을 입력해 주세요." name="company" onChange={handleChange}/>
                                </div>
                                <div>
                                    <label htmlFor="name">담당자</label>
                                    <input type="text" id="name" placeholder="이름을 입력해 주세요." name="name" onChange={handleChange}/>
                                </div>
                                <div>
                                    <label htmlFor="positionName">직급</label>
                                    <input type="text" id="positionName" placeholder="직급을 입력해 주세요." name="position" onChange={handleChange}/>
                                </div>
                                <div>
                                    <label htmlFor="phoneNumber">연락처</label>
                                    <input type="text" id="phoneNumber" placeholder="연락 가능한 번호를 입력 주세요."
                                           name="phone" onChange={handleChange}/>
                                </div>
                                <div>
                                    <label htmlFor="email">이메일</label>
                                    <input type="text" id="email" placeholder="이메일을 입력해주세요."
                                           name="email" onChange={handleChange}/>
                                </div>
                            </div>
                        </fieldset>

                        <fieldset className="service-info">
                            <legend><span>02</span> 어떤것이 궁금하신가요</legend>
                            <div>
                                <label>
                                    <input type="radio" name="type" value="B" onChange={handleChange}/>
                                    <span>생체 바이오 코팅 기술</span>
                                </label>
                                <label>
                                    <input type="radio" name="type" value="S" onChange={handleChange}/>
                                    <span>세라믹 코팅기술</span>
                                </label>
                                <label>
                                    <input type="radio" name="type" value="C" onChange={handleChange}/>
                                    <span>색상구현 코팅기술</span>
                                </label>
                                <label>
                                    <input type="radio" name="type" value="O" onChange={handleChange}/>
                                    <span>키다 코팅기술</span>
                                </label>
                            </div>
                        </fieldset>

                        <fieldset className="inquiry-detail">
                            <legend><span>03</span> 문의하실 내용을 입력해 주세요</legend>
                            <div className="text-box">
                                <input type="text" id="inquiryDetailTitle" placeholder="문의 제목을 입력해 주세요" name="title" onChange={handleChange}/>
                                <textarea id="inquiryDetailText" placeholder="문의하실 내용을 자유롭게 적어주세요" name="message" onChange={handleChange}></textarea>
                            </div>
                            <div className="file-box">
                                <p>첨부파일 -첨부파일의 최대 파일사이즈는 10M 이하입니다.</p>
                                <div className="uploadNameBox">
                                    <input className="uploadName" type="text" id="contactUs_fileName" placeholder="파일을 업로드해주세요" value={fileName} readOnly/>
                                </div>
                                <input type="file" id="dk_inquiry_pdsFile" name="attachedFile" onChange={handleChange}/><label htmlFor="dk_inquiry_pdsFile">파일선택</label>
                            </div>
                        </fieldset>

                        <fieldset className="agree">
                            <label>
                                <input type="checkbox" id="agreeConfirm" name="agreeTerms" onChange={() => setCheck(!isCheck)} checked={isCheck}/>
                                [필수] 개인 정보 수집 및 이용에 대해 동의합니다.
                            </label>
                            <div>
                                문의 답변 발송을 위한 개인정보(회사명, 이름, 직급, 연락처, 이메일)를 수집하고 이용합니다.<br/>
                                수집된 정보는 이메일 발송, 전화상담, 통계 조회 외 다른 목적으로 이용되지 않으며, 서비스가 종료되거나 구독을 해지할 경우 즉시 그 정보가 파기됩니다.<br/>
                                이 내용에 동의하지 않을 경우, 개인정보 수집 및 이용 동의를 거부할 권리가 있습니다. 다만, 동의 거부 시 서비스 이용이 제한됩니다.
                            </div>
                        </fieldset>

                        <fieldset className="agree">
                            <label>
                                <input type="checkbox" name="adAgree" onChange={() => setAdCheck(!isAdCheck)} checked={isAdCheck}/>
                                [선택] 광고성 정보 수신에 동의합니다.
                            </label>
                            <div>
                                프로모션, 이벤트 정보 등의 광고성 정보가 포함된 뉴스레터를 발송할 수 있습니다. 뉴스레터 내 광고에 해당하는 콘텐츠는 다른 소식과 구별되도록 별도의 표시(AD)를 붙이고 있습니다.<br/>
                                이 내용에 동의하지 않을 경우 광고성 정보 수신 동의를 거부할 권리가 있습니다. 다만, 동의 거부 시 서비스 이용이 제한됩니다.
                            </div>
                        </fieldset>

                        <div className="submit">
                            <button type="button" id="goSubmit" onClick={save}>문의하기</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
