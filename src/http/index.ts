import axios, { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import {baseURL} from './../utils/config';

interface AxiosAuthConfig extends AxiosRequestConfig {
    withCredentials?: boolean
    _isRetry?:boolean
}

interface AuthResponse {
    accessToken: string
}

const $api = axios.create({
    withCredentials: true,
    baseURL: `${baseURL}/api`,
})


export default $api