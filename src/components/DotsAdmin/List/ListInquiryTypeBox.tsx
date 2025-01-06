import { usePathname, useRouter, useSearchParams } from "next/navigation"
interface Props {
    inquiryType : string
}
export default function ListInquiryTypeBox ({inquiryType} : Props) {

    const router = useRouter()
    const path = usePathname()
    const query = useSearchParams()
    function search (e:any){
        const newParams : number | any = new URLSearchParams(query.toString())
        newParams.set('inquiryType', e.target.value)
        router.push(`${path}?${newParams?.toString()}`)
    }
    return(
        <>
        <div className="selectBox">
            <select value={inquiryType} name="" id="" onChange={search}>
                <option value="ALL" selected>전체</option>
                <option value="B" selected>생체 바이오 코팅 기술</option>
                <option value="S" selected>세라믹 코팅기술</option>
                <option value="C" selected>색상구현 코팅기술</option>
                <option value="O" selected>키다 코팅기술</option>
            </select>
        </div>
        </>
    )
}
