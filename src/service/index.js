import axios from "axios";
import config from './config.json'


const query = ["general" ,"activity", "average-sessions", "performance" ]

const service = async (userId, nbQuery) =>
{
    let url = `${ config.baseUrl }:${ config.port }${ config.dataPath }${ userId }`
    url += nbQuery > 0 ? "/" + query[nbQuery] : "";
    let data = axios.get(url)
    return await data
}
export default service;