import { AxiosResponse } from 'axios';
import  $api  from '.';
import { UserDefault } from '../types/types';
import { GENDER } from '../types/enum';

export class AuthHttp{
    static async registration(payload:{
        email:string,
        fullName: string,
        password:string
    }){
        const res: AxiosResponse<UserDefault> = await $api.post("auth/registration",payload)
        return res.data
    }
    static async login(payload:{
        email:string,
        password:string
    }){
        const res: AxiosResponse<UserDefault> = await $api.post("auth/login",payload)
        return res.data
    }
    static async confirm(payload:{
        code:number,
        _id:string
    }){
        const res: AxiosResponse<UserDefault> = await $api.post("auth/confirm",payload)
        return res.data
    }
    static async addPhoto(payload: FormData){
        const res: AxiosResponse<UserDefault> = await $api.post("auth/add-photo",payload)
        return res.data
    }
    static async addDetails(payload:{
        _id:string,
        birthDate: Date,
        gender:GENDER,
        breast?:number
    }){
        const res: AxiosResponse<UserDefault> = await $api.post("auth/add-details",payload)
        return res.data
    }
}