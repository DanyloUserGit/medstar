import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthHttp } from "../../../http/auth";
import { GENDER } from "../../../types/enum";
import { UserDefault } from "../../../types/types";
import { IconFemale } from "../svg/IconFemale";
import { IconMale } from "../svg/IconMale";
import { Logo } from "../ui/Logo";
import dayjs from 'dayjs';

export const AuthAddDetails = () => {
    const [date, setDate] = useState<dayjs.Dayjs>(dayjs(new Date()))
    const [open, setOpen] = useState(false)
    const [gender, setGender] = useState(GENDER.MALE)
    const [breast, setBreast] = useState(1)
    const navigate = useNavigate();
    const location = useLocation()

    const user:UserDefault = location.state;

    const addDetails = async() => {
        try {
            console.log(user)
            if(user){
                await AuthHttp.addDetails({
                    gender,
                    _id:user._id,
                    birthDate:new Date(date?.toDate()),
                    breast
                })
                navigate('/desk', {state:{...user}})
            }
        } catch (error) {
            alert(`Server error: ${error}`)
        }
    }
    return(
        <>
            <Logo />
            <div className="form">
                <h3 className="title">Your birth date:</h3>
                <div className="datepicker">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker
                        disableFuture
                        onChange={(d)=>{
                            if(d){
                                setDate(d)
                            }
                        }}
                        label={new Date(date?.toDate()).toDateString()} />
                    </DemoContainer>
                </LocalizationProvider>
                </div>
                <h3 className="title">Your gender:</h3>
                <div className="options">
                    <div onClick={()=>setGender(GENDER.MALE)} className={gender===GENDER.MALE ? "options-item options-item-active" : "options-item"}>
                        <IconMale />
                    </div>
                    <div onClick={()=>setGender(GENDER.FEMALE)} className={gender===GENDER.FEMALE ? "options-item options-item-active"  : "options-item"}>
                        <IconFemale />
                    </div>
                </div>
                {
                    gender===GENDER.FEMALE && 
                    <>
                        <h3 className="title">Breast size:</h3>
                        <input className="form-input" type="number" min={1} max={10} value={breast} placeholder="Breast size" onChange={(e)=>{
                                setBreast(Number(e.target.value))
                        }} />
                    </>
                }
                <button 
                    className="form-btn"
                    onClick={addDetails}
                >
                    Next
                </button>
            </div>
        </>
    );
}