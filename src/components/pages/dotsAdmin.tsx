'use client'

import api from "@/lib/api"
import { useRouter } from "next/navigation"
import { useState } from "react"
// import { useAppDispatch } from "@/store/hooks"
import { useCookies } from 'react-cookie'
import Image from "next/image";

export default function AdminLoginPage () {
    const router = useRouter()
    // const dispatch = useAppDispatch()
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [cookies , setCookie] = useCookies(['hessid']);
    const [login, setLogin] = useState<{id :string, password : string}>({
        id : '', password : ''
    })
    function handleChange(e:React.ChangeEvent<HTMLInputElement>){
        const {name, value} = e.target;
        setLogin((prev) => ({...prev, [name] : value}))
    }
    async function handleLogin () {
        try{
            const res = await api.get(`/admin/manager/adminLogin.php?managerLoginId=${login?.id}&managerPass=${login?.password}`)
            if(res?.data?.result === true) {
                setCookie('hessid', res.data.uuid, { path: '/' }); // You can adjust the options as needed
                router.push(`/dotsAdmin/common-code-management/common-code-list`);
            }else{
                alert(res.data.resultMsg);
            }
        }catch{
            alert('Server Error')
        }
    }
    function handleEnter (e:React.KeyboardEvent<HTMLInputElement>){
        if(e.key==='Enter') handleLogin()
    }
    return(<>
        <div className="admin_loginBox">
            <h2>Onetech ADMIN</h2>
            <p>로그인 후 더욱 다양한 서비스를 이용해 보세요.</p>
            <div>
                <div className="inputList">
                    <label htmlFor="">
                        <Image src="/images/dotsAdmin/form_id.png" alt="login" width={16} height={16}/>
                    </label>
                    <input
                        type="text"
                        onChange={handleChange}
                        name="id"
                        id=""
                        onKeyDown={handleEnter}
                        placeholder="아이디"
                    />
                </div>
                <div className="inputList">
                    <label htmlFor="">
                        <Image src="/images/dotsAdmin/form_pw.png" alt="password" width={13} height={16}/>
                    </label>
                    <input
                        type="password"
                        onChange={handleChange}
                        name="password"
                        id=""
                        onKeyDown={handleEnter}
                        placeholder="비밀번호"
                    />
                </div>
                <div className="inputCheckBox">
                    <input type="checkbox" name="id_save" id="id_save"/>
                    <label htmlFor="id_save">아이디 저장</label>
                </div>

                <button
                    className="admin_loginBtn"
                    onClick={handleLogin}
                >로그인</button>
            </div>
        </div>
    </>)
}
