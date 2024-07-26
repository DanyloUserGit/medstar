import { GENDER } from "./enum";

export interface UserDefault{
    _id:string;
    email:string;
    fullName:string;
}

export interface UserExtended{
    _id:string;
    user:UserDefault;
    isPhotoLoaded:boolean;
    isDetailGiven:boolean;
    createdUserDate:Date;
    gender:GENDER;
    breast:number;
    birthUserDate:Date;
}