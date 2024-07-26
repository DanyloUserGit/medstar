import { useEffect, useState } from "react";
import { Logo } from "../../general/ui/Logo";
import { UserDefault, UserExtended } from "../../../types/types";
import { IdentityHttp } from "../../../http/identity";
import { useLocation } from "react-router-dom";
import { AxiosResponse } from "axios";

export const Desk = () => {
    const [user, setUser] = useState<UserExtended>()
    const location = useLocation()

    const userData:UserDefault = location.state;

    useEffect(() => {
        IdentityHttp.getIdentity({_id:userData._id}).then((res)=>{
            console.log(res);
            setUser(res)
        })
    }, [])
    
    return(
        <>
            {user ? 
            <>
                <Logo />
                <h3 className="title">User info:</h3>
                <table className="table-horizontal">
                    <tr>
                        <th>Full name:</th>
                        <th>Birth date:</th>
                    </tr>
                    <tr>
                        <td>{user.user.fullName}</td>
                        <td>{user.birthUserDate.toString().split("T")[0]}</td>
                    </tr>
                </table>
                <div style={{margin:"30px 0"}} />
                <h3 className="title">Physical characteristic:</h3>
                <table className="table-vertical">
                    <tr>
                        <th>Property:</th>
                        <th>Value:</th>
                        <th>Normal:</th>
                    </tr>
                    <tr>
                        <td className="table-vertical-prop">weight</td>
                        <td>71</td>
                        <td>65-73</td>
                    </tr>
                    <tr>
                        <td className="table-vertical-prop">height</td>
                        <td>178</td>
                        <td>175-182</td>
                    </tr>
                </table>
                <div style={{margin:"30px 0"}} />
                <h3 className="title">Visible damage:</h3>
                <table className="table-vertical">
                    <tr>
                        <th>Property:</th>
                        <th>Visible:</th>
                    </tr>
                    <tr>
                        <td className="table-vertical-prop">Scars</td>
                        <td>yes</td>
                    </tr>
                    <tr>
                        <td className="table-vertical-prop">Open injuries</td>
                        <td>no</td>
                    </tr>
                    <tr>
                        <td className="table-vertical-prop">Birthmarks</td>
                        <td>yes</td>
                    </tr>
                    <tr>
                        <td className="table-vertical-prop">Wounds</td>
                        <td>yes</td>
                    </tr>
                    <tr>
                        <td className="table-vertical-prop">Pimples</td>
                        <td>yes</td>
                    </tr>
                    <tr>
                        <td className="table-vertical-prop">Tattoos</td>
                        <td>no</td>
                    </tr>
                    <tr>
                        <td className="table-vertical-prop">Varicose</td>
                        <td>no</td>
                    </tr>
                    <tr>
                        <td className="table-vertical-prop">Cellulite</td>
                        <td>no</td>
                    </tr>
                </table>
                <div style={{margin:"30px 0"}} />
                <h3 className="title">Additional information:</h3>
                <table className="table-vertical">
                    <tr>
                        <th>Property:</th>
                        <th>Value:</th>
                    </tr>
                    <tr>
                        <td className="table-vertical-prop">Skin color</td>
                        <td>white</td>
                    </tr>
                    <tr>
                        <td className="table-vertical-prop">Absence of limbs</td>
                        <td>no</td>
                    </tr>
                    <tr>
                        <td className="table-vertical-prop">Musculature</td>
                        <td>developed</td>
                    </tr>
                </table>
            </>
            : ""}

        </>
    );
}