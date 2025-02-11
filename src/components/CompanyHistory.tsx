
interface Props {
    language?:any
}

export default function CompanyHistory({language}: Props) {
    return (
        <>
            <div className="company-history-section"> 
                <div className="company-history-title">
                    <h1>{language?.History_01}</h1>
                    <hr/>
                </div>

                <div className="company-history-wrap">
                    <div className="company-history-image">
                        <div>
                            <p>{language?.History_02}</p>
                            <p>{language?.History_03}</p>
                        </div>
                    </div>
                    <div className="company-history-contents">
                        <div>
                            <ul>
                                <li>
                                    <p>{language?.History_04}</p>
                                    <ul className={"history-monthly-content"}>
                                        <li><span>{language?.History_05}</span>{language?.History_06}</li>
                                    </ul>
                                </li>
                                <li>
                                    <p>{language?.History_07}</p>
                                    <ul className={"history-monthly-content"}>
                                        <li><span>{language?.History_08}</span>{language?.History_09}</li>
                                        <li><span>{language?.History_10}</span>{language?.History_11}</li>
                                    </ul>
                                </li>
                                <li>
                                    <p>{language?.History_12}</p>
                                    <ul className={"history-monthly-content"}>
                                        <li><span>{language?.History_13}</span>{language?.History_14}</li>
                                        <li><span>{language?.History_15}</span>{language?.History_16}</li>
                                    </ul>
                                </li>
                                <li>
                                    <p>{language?.History_17}</p>
                                    <ul className={"history-monthly-content"}>
                                        <li><span>{language?.History_18}</span>{language?.History_19}</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}