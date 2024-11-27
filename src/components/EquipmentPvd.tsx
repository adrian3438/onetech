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
                            <p>스퍼터링 장비</p>
                        </div>
                    </div>
                    <div className={"pvd-equipments"}>
                        <div>
                            <Image src="/images/ion-plating-equipment.png" alt="ion plating Equipment" width={472}
                                   height={279}/>
                        </div>
                        <div>
                            <p>이온 플레이팅 장비</p>
                        </div>
                    </div>
                    <div className={"pvd-equipments"}>
                        <div>
                            <Image src="/images/roll-to-roll-equipment.png" alt="Roll to Roll Equipment" width={472}
                                   height={279}/>
                        </div>
                        <div>
                            <p>롤투롤 장비</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}