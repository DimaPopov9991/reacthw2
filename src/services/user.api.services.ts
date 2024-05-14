import axios, {AxiosInstance} from "axios";


let axiosinstance:AxiosInstance=axios.create({baseURL: "https://dummyjson.com", headers: {"Content-Type":"application/json"}})
const getAllUsers=()=>{ return axiosinstance.get('/users')}

let axiosinstance1:AxiosInstance=axios.create({baseURL: "https://dummyjson.com/posts/user", headers: {"Content-Type":"application/json"}})
const getuserpost=(id:any)=>{ return axiosinstance1.get(`/${id}`)}
// const getAllUsers:() => Promise<any> =()=>{return (   fetch('https://dummyjson.com/users')
//     .then(res => res.json()))}
//
export {getAllUsers}
export {getuserpost}