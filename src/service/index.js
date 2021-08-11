import axios from "axios";

const baseUrl = "http://localhost";
const dataPath = "/user/"
const port = 3000
const query = ["general" ,"activity", "average-sessions", "performance" ]

 const  service = (userId, nbQuery) =>
{
     let url = `${baseUrl}:${port}${dataPath}${userId}`
     //let data = fetch(url).then(res => res.json())
     url += nbQuery > 0 ? "/"+query[nbQuery]: "";
     let data = axios.get(url)
     //console.log("service",data)
     
    return data
}
export default service;