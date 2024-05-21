import axios, {AxiosInstance, AxiosResponse} from "axios";
import {IusersProps} from "../models/IusersProps";
import {IPostsProps} from "../models/IPostsProps";

let axiosinstance: AxiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {"Content-Type": "application/json"}
})

const UserApiservice = {
    getAllUsers: (): Promise<AxiosResponse<IusersProps[]>> =>{
        return axiosinstance.get('/users')
    },
    getAllPosts: ():Promise<AxiosResponse<IPostsProps[]>> =>{
        return axiosinstance.get('/posts')

    }

}

export {UserApiservice}

