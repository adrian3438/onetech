'use client';
export default function ContactUs() {
    return (
        <>
            <div className={"contact-section"}>
                <div className={"contact-header-title"}>
                    <h1>문의 하기</h1>
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
                                    <input type="text" id="companyName" placeholder="회사명을 입력해 주세요." name="company"/>
                                </div>
                                <div>
                                    <label htmlFor="companyName">담당자</label>
                                    <input type="text" id="companyName" placeholder="이름을 입력해 주세요." name="company"/>
                                </div>
                                <div>
                                    <label htmlFor="companyName">직급</label>
                                    <input type="text" id="companyName" placeholder="직급을 입력해 주세요." name="company"/>
                                </div>
                                <div>
                                    <label htmlFor="companyName">연락처</label>
                                    <input type="text" id="companyName" placeholder="연락 가능한 번호를 입력 주세요."
                                           name="company"/>
                                </div>

                            </div>
                        </fieldset>

                        <fieldset className="service-info">
                            <legend><span>02</span> 어떤것이 궁금하신가요</legend>
                            <div>
                                <label>
                                    <input type="radio" id="serviceInfo01" name="type" value="GE"/>
                                    <span>코팅 기술</span>
                                </label>
                                <label>
                                    <input type="radio" id="serviceInfo01" name="type" value="GE"/>
                                    <span>진공 코팅기술</span>
                                </label>
                                <label>
                                    <input type="radio" id="serviceInfo01" name="type" value="GE"/>
                                    <span>색상구현 코팅기술</span>
                                </label>
                                <label>
                                    <input type="radio" id="serviceInfo01" name="type" value="GE"/>
                                    <span>키다 코팅기술</span>
                                </label>

                            </div>
                        </fieldset>

                        <fieldset className="inquiry-detail">
                            <legend><span>03</span> 문의하실 내용을 입력해 주세요</legend>
                            <div className="text-box">
                                <input type="text" id="inquiryDetailTitle" placeholder="문의 제목을 입력해 주세요" name="title" />
                                <textarea id="inquiryDetailText" placeholder="문의하실 내용을 자유롭게 적어주세요" name="message" ></textarea>
                            </div>
                            <div className="file-box">
                                <p>첨부파일 -첨부파일의 최대 파일사이즈는 10M 이하입니다.</p>
                                <div className="uploadNameBox">
                                    <input className="uploadName" type="text" id="contactUs_fileName" placeholder="파일을 업로드해주세요"/>
                                </div>
                                <input type="file" id="dk_inquiry_pdsFile" name="attachedFile" /><label htmlFor="dk_inquiry_pdsFile">파일선택</label>
                            </div>
                        </fieldset>
                        
                        <fieldset className="agree">
                            <label>
                                <input type="checkbox" id="agreeConfirm" name="agreeTerms"/>
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
                                <input type="checkbox" id="agreeConfirm" name="adAgree"/>
                                [선택] 광고성 정보 수신에 동의합니다.
                            </label>
                            <div>
                                프로모션, 이벤트 정보 등의 광고성 정보가 포함된 뉴스레터를 발송할 수 있습니다. 뉴스레터 내 광고에 해당하는 콘텐츠는 다른 소식과 구별되도록 별도의 표시(AD)를 붙이고 있습니다.<br/>
                                이 내용에 동의하지 않을 경우 광고성 정보 수신 동의를 거부할 권리가 있습니다. 다만, 동의 거부 시 서비스 이용이 제한됩니다.
                            </div>
                        </fieldset>
                        
                        <div className="submit">
                            <button type="button" id="goSubmit">문의하기</button>
                        </div>
                    </form>

                </div>

            </div>
        </>
    )
}