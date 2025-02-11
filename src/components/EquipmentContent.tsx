'use client'

import {useState} from "react";
import EquipmentPvd from "../components/EquipmentPvd";
import EquipmentCvd from "../components/EquipmentCvd";


interface Props {
    language?:any
}

export default function EquipmentContent({language} : Props) {
    const [state, setState] = useState(1);

    return (
        <>
            <div className={"equipment-manufacturing-section"} id="section3">
                <div className="equipment-manufacturing-title">
                    <h1>{language?.Equipment_01}</h1>
                    <hr/>
                </div>

                <div className={"equipment-container"}>
                    <div className={"equipment-tab1"}>
                        <button className={state === 1 ? "active" : ""} onClick={() => setState(1)}>{language?.Equipment_02}</button>
                    </div>
                    <div className={"equipment-tab2"}>
                        <button className={state === 2 ? "active" : ""} onClick={() => setState(2)}>{language?.Equipment_03}</button>
                    </div>
                </div>

                <div>
                    {state === 1 ? <EquipmentPvd/> : <EquipmentCvd/>}
                </div>
            </div>
        </>
    )
}
