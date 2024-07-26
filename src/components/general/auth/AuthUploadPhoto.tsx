import { useState } from "react";
import { Logo } from "../ui/Logo";
import { FileInput } from "../ui/FileInput";
import { useLocation, useNavigate } from "react-router-dom";
import { UserDefault } from "../../../types/types";
import { AuthHttp } from "../../../http/auth";

export const AuthUploadPhoto = () => {
    const navigate = useNavigate()

    const [file, setFile] = useState<File | null>(null);
    const location = useLocation()

    const user:UserDefault = location.state;

    const uploadPhoto = async() => {
        try {
            if(file){
                const formCatData = new FormData()
                let payload:{
                    _id:string
                }={
                    _id:user._id
                }
                formCatData.append("payload", JSON.stringify(payload));
                formCatData.append("file", file)

                await AuthHttp.addPhoto(formCatData);
                navigate('/add-details', {state:{...user}})
            }
        } catch (error) {
            alert(`Server error: ${error}`)
        }
    }
    return(
        <>
            <Logo />
            <div className="content">
                <h3 className="title">Upload your photo</h3>
                <FileInput setFile={setFile} file={file}/>
            </div>
            <button 
                    className="form-btn"
                    onClick={uploadPhoto}
                >
                    Next
            </button>
        </>
    );
}