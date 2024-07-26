import { useNavigate } from "react-router-dom";

export const RegMenu = ({
    option,
    setOption
}:{
    option:boolean,
    setOption:(s:boolean)=>void
}) => {
    const navigate = useNavigate()
    return(
        <>
            <div className="regmenu">
                <span onClick={()=>{setOption(true); navigate('/login')}} className={option ? "active" : ""}>Login</span>
                <span onClick={()=>{setOption(false); navigate('/')}} className={option ? "" : "active"}>Registration</span>
            </div>
        </>
    );  
}