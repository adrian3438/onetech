'use client'

import {useState} from "react";
import EquipmentPvd from "../components/EquipmentPvd";
import EquipmentCvd from "../components/EquipmentCvd";

export default function EquipmentContent() {
    const [state, setState] = useState(1);

    return (
        <>
            <div className={"equipment-manufacturing-section"}>
                <div className="equipment-manufacturing-title">
                    <h1>장비 제조 기술</h1>
                    <hr/>
                </div>

                <div className={"equipment-container"}>
                    <div className={"equipment-tab1"}>
                        <button className={state === 1 ? "active" : ""} onClick={() => setState(1)}>PVD 장비 제조 기술</button>
                    </div>
                    <div className={"equipment-tab2"}>
                        <button className={state === 2 ? "active" : ""} onClick={() => setState(2)}>CVD 장비 제조 기술</button>
                    </div>
                </div>

                <div>
                    {state === 1 ? <EquipmentPvd/> : <EquipmentCvd/>}
                </div>
            </div>
        </>
    )
}