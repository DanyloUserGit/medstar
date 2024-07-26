import { useState } from "react";
import { Logo } from "../ui/Logo";
import { RegMenu } from "../ui/RegMenu";
import { useNavigate } from "react-router-dom";
import {
    emailPattern,
    inNotEmpty,
    isPasswordPattern,
} from "../../../utils/patterns"
import { AuthHttp } from "../../../http/auth";
import { UserDefault } from "../../../types/types";

export const AuthReg = () => {
    const navigate = useNavigate()
    const [option, setOption] = useState(false)
    const [email, setEmail] = useState("")
    const [fullName, setFullName] = useState("")
    const [password, setPassword] = useState("")
    const [passwordRepeat, setPasswordRepeat] = useState("")

    const validate = !Boolean(
        new RegExp(emailPattern).test(email) &&
        new RegExp(isPasswordPattern).test(password) &&
        new RegExp(`^${password}$`).test(passwordRepeat) &&
        passwordRepeat === password 
    )
    const reg = async() => {
        try {
            const res:UserDefault  = await AuthHttp.registration({
                email,
                fullName,
                password
            })
            navigate('/confirmation-code', {state:{...res}})
        } catch (error) {
            alert(`Server error: ${error}`)
        }
    }
    return(
        <>
            <Logo />
            <RegMenu option={option} setOption={setOption}/>
            <div className="form">
                <span className="form-label">Full name:</span>
                <input className="form-input" type="text" placeholder="Full name" value={fullName} onChange={(e)=>setFullName(e.target.value)}/>
                <span className="form-label">Email:</span>
                <input className="form-input" type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <span className="form-label">Password:</span>
                <input className="form-input" type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <span className="form-label">Repeat password:</span>
                <input className="form-input" type="password" placeholder="Password" value={passwordRepeat} onChange={(e)=>setPasswordRepeat(e.target.value)}/>
                <button 
                    disabled={validate}
                    className={!validate ? "form-btn" : "form-btn form-btn-inactive"}
                    onClick={reg}
                >
                    Sign up
                </button>
            </div>
        </>
    );
}