import { IconFileAttach } from "../svg/IconFileAttach";

export const FileInput = ({
    setFile,
    file
}:{
    setFile:(s:File | null)=>void,
    file:File | null
}) => {
    return(
        <>
            <div className="fileinput">
                <input className="fileinput-input" type="file" accept="image/*" onChange={(e)=>{
                    if(e.target.files){
                        setFile(e.target.files[0])
                    }
                }}/>
                {!file ? <IconFileAttach /> : 
                    <img src={URL.createObjectURL(file)}/>
                }
            </div>
        </>
    );
}