import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthHttp } from "../../../http/auth";
import { UserDefault } from "../../../types/types";
import { CodeInput } from "../ui/CodeInput";
import { Logo } from "../ui/Logo";

export const AuthSubmit = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [code, setCode] = useState("");

    const user:UserDefault = location.state;

    const validate = !Boolean(
        code.length===4
    )
    const confirm = async() => {
        try {
            const res:UserDefault  = await AuthHttp.confirm({
                _id:user._id,
                code:Number(code)
            })
            navigate('/add-photo', {state:{...user}})
        } catch (error) {
            alert(`Server error: ${error}`)
        }
    }
    return(
        <>
            <Logo />
            <h3 className="title">Enter your confirmation code</h3>
            <CodeInput change={setCode} />
            <button 
                disabled={validate}
                className={!validate ? "form-btn" : "form-btn form-btn-inactive"}
                onClick={confirm}
            >
                Confirm
            </button>
        </>
    );
}