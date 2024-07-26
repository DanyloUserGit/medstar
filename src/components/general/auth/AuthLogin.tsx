import { useState } from "react";
import { Logo } from "../ui/Logo";
import { RegMenu } from "../ui/RegMenu";
import { useNavigate } from "react-router-dom";
import { AuthHttp } from "../../../http/auth";
import { UserDefault } from "../../../types/types";
import { emailPattern, isPasswordPattern } from "../../../utils/patterns";

export const AuthLogin = () => {
    const navigate = useNavigate()
    const [option, setOption] = useState(true);

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const validate = !Boolean(
        new RegExp(emailPattern).test(email) &&
        new RegExp(isPasswordPattern).test(password) 
    )
    const login = async() => {
        try {
            const res:UserDefault  = await AuthHttp.login({
                email,
                password
            })
            navigate('/desk', {state:{...res}})
        } catch (error) {
            alert(`Server error: ${error}`)
        }
    }
    return(
        <>
            <Logo />
            <RegMenu option={option} setOption={setOption}/>
            <div className="form">
                <span className="form-label">Email:</span>
                <input className="form-input" type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <span className="form-label">Password:</span>
                <input className="form-input" type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button 
                    disabled={validate}
                    className={!validate ? "form-btn" : "form-btn form-btn-inactive"}
                    onClick={login}
                >
                    Login
                </button>
            </div>
        </>
    );
}