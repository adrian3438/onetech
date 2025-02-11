import Image from "next/image";


export default function EquipmentPdv() {
    return (
        <>
            <div className={"pvd-wrap"}>
                <div className={"pvd-title"}>
                    PVD 장비설계 및 제조기술
                </div>
                <div className={"pvd-container"}>
                    <div className={"pvd-equipments"}>
                        <div>
                            <Image src="/images/sputtering-equipment.png" alt="sputtering Joint Coating" width={472}
                                   height={279}/>
                        </div>
                        <div>
                            {/*<p>스퍼터링 장비</p>*/}

                            <table>
                                <tbody>
                                <tr>
                                    <td className="header" colSpan={2}>스퍼터링 장비 - Process Conditions</td>
                                </tr>
                                <tr>
                                    <td className={"cell-content1"}>Substrate</td>
                                    <td className={"cell-content2"}>Metal, Ceramic, Glass, Polymer</td>
                                </tr>
                                <tr>
                                    <td className={"cell-content1"}>Target Size</td>
                                    <td className={"cell-content2"}>90×810 mm<span><sup>²</sup></span></td>
                                </tr>
                                <tr>
                                    <td className={"cell-content1"}>Target Materials</td>
                                    <td className={"cell-content2"}>Cr, Ti, Zr, Cu, Ag, Al, Si etc</td>
                                </tr>
                                <tr>
                                    <td className={"cell-content1"}>Base pressure</td>
                                    <td className={"cell-content2"}>~ 5× 10<sup>-⁶</sup> Torr</td>
                                </tr>
                                <tr>
                                    <td className={"cell-content1"}>Working pressure</td>
                                    <td className={"cell-content2"}>5 × 10<sup>-⁴</sup> Torr ~ 8 x
                                        10<sup>-⁸</sup> Torr
                                    </td>
                                </tr>
                                <tr>
                                    <td className={"cell-content1"}>Magnetron field</td>
                                    <td className={"cell-content2"}>100 mT</td>
                                </tr>
                                <tr>
                                    <td className={"cell-content1"}>D.C power (10kW)</td>
                                    <td className={"cell-content2"}>2 set</td>
                                </tr>
                                <tr>
                                    <td className={"cell-content1"}>Pulsed DC Power (10kW)</td>
                                    <td className={"cell-content2"}>1 set</td>
                                </tr>
                                <tr>
                                    <td className={"cell-content1"}>Temperature</td>
                                    <td className={"cell-content2"}>R.T ~ 350°C</td>
                                </tr>
                                <tr>
                                    <td className={"cell-content1"}>Gas Supplying Unit</td>
                                    <td className={"cell-content2"}>MFC (Ar, N₂, O₂, C₂H₂)</td>
                                </tr>
                                </tbody>

                            </table>
                        </div>
                    </div>
                    <div className={"pvd-equipments"}>
                        <div>
                            <Image src="/images/ion-plating-equipment.png" alt="ion plating Equipment" width={472}
                                   height={279}/>
                        </div>
                        <div>
                            {/*<p>이온 플레이팅 장비</p>*/}
                            <div>
                                <table>
                                    <tbody>
                                    <tr>
                                        <td className="header" colSpan={2}>이온 플레이팅 장비 - Process Conditions</td>
                                    </tr>
                                    <tr>
                                        <td className={"cell-content1"}>Substrate</td>
                                        <td className={"cell-content2"}>PC, PET, Polymer Substrate</td>
                                    </tr>
                                    <tr>
                                        <td className={"cell-content1"}>ITO target</td>
                                        <td className={"cell-content2"}>In₂O₃ - 5 wt% SnO₂ ( 130×16 ㎠ )</td>
                                    </tr>
                                    <tr>
                                        <td className={"cell-content1"}>Ag target</td>
                                        <td className={"cell-content2"}>99.97% ( 130×16 ㎠ )</td>
                                    </tr>
                                    <tr>
                                        <td className={"cell-content1"}>Base pressure</td>
                                        <td className={"cell-content2"}>~ 3 × 10-⁶ Torr</td>
                                    </tr>
                                    <tr>
                                        <td className={"cell-content1"}>Working pressure</td>
                                        <td className={"cell-content2"}>5 × 10<sup>-⁴</sup> Torr ~ 3 x
                                            10<sup>-³</sup> Torr
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={"cell-content1"}>Magnetron field</td>
                                        <td className={"cell-content2"}>60~130 mT</td>
                                    </tr>
                                    <tr>
                                        <td className={"cell-content1"}>D.C power</td>
                                        <td className={"cell-content2"}>ITO Coating</td>
                                    </tr>
                                    <tr>
                                        <td className={"cell-content1"}>R.F Power</td>
                                        <td className={"cell-content2"}>Ag, AgOx Coating</td>
                                    </tr>
                                    <tr>
                                        <td className={"cell-content1"}>Temperature</td>
                                        <td className={"cell-content2"}>R.T</td>
                                    </tr>
                                    <tr>
                                        <td className={"cell-content1"}>Oxygen flow rate</td>
                                        <td className={"cell-content2"}>[O₂/(Ar+O₂)] : 0 ~ 3 (%)</td>
                                    </tr>
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                    <div className={"pvd-equipments"}>
                        <div>
                            <Image src="/images/roll-to-roll-equipment.png" alt="Roll to Roll Equipment" width={472}
                                   height={279}/>
                        </div>
                        <div>
                            {/*<p>롤투롤 장비</p>*/}

                            <div>
                                <table>
                                    <tbody>
                                    <tr>
                                        <td className="header" colSpan={2}>롤투롤 장비 - Process Conditions</td>
                                    </tr>
                                    <tr>
                                        <td className={"cell-content1"}>Substrate</td>
                                        <td className={"cell-content2"}>PC, PET, Polymer Substrate</td>
                                    </tr>
                                    <tr>
                                        <td className={"cell-content1"}>ITO target</td>
                                        <td className={"cell-content2"}>In₂O₃ - 5 wt% SnO₂ ( 130×16 ㎠ )</td>
                                    </tr>
                                    <tr>
                                        <td className={"cell-content1"}>Ag target</td>
                                        <td className={"cell-content2"}>99.97% ( 130×16 ㎠ )</td>
                                    </tr>
                                    <tr>
                                        <td className={"cell-content1"}>Base pressure</td>
                                        <td className={"cell-content2"}>~ 3 × 10-⁶ Torr</td>
                                    </tr>
                                    <tr>
                                        <td className={"cell-content1"}>Working pressure</td>
                                        <td className={"cell-content2"}>5 × 10<sup>-⁴</sup> Torr ~ 3 x
                                            10<sup>-³</sup> Torr
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={"cell-content1"}>Magnetron field</td>
                                        <td className={"cell-content2"}>60~130 mT</td>
                                    </tr>
                                    <tr>
                                        <td className={"cell-content1"}>D.C power</td>
                                        <td className={"cell-content2"}>ITO Coating</td>
                                    </tr>
                                    <tr>
                                        <td className={"cell-content1"}>R.F Power</td>
                                        <td className={"cell-content2"}>Ag, AgOx Coating</td>
                                    </tr>
                                    <tr>
                                        <td className={"cell-content1"}>Temperature</td>
                                        <td className={"cell-content2"}>R.T</td>
                                    </tr>
                                    <tr>
                                        <td className={"cell-content1"}>Oxygen flow rate</td>
                                        <td className={"cell-content2"}>[O₂/(Ar+O₂)] : 0 ~ 3 (%)</td>
                                    </tr>
                                    </tbody>

                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}