import { AxiosResponse } from "axios"
import $api from "."
import { UserExtended } from "../types/types"

export class IdentityHttp{
    static async getIdentity(payload: {_id:string}){
        const res: AxiosResponse<UserExtended> = await $api.post("useridentity/get-identity",payload);
        return res.data;
    }
}