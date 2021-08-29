import axios from 'axios';
import configArr from './config.json';

const query = ['general', 'activity', 'average-sessions', 'performance'];

const service = async (userId, nbQuery) => {
    const config = configArr[1]; // Define this number to 1 if you want to use heroku, or 0 if you want to use local
    let url = `${config.baseUrl}${config.port ? ':' + config.port : ''}${
        config.dataPath
    }${userId}`;
    url += nbQuery > 0 ? '/' + query[nbQuery] : '';
    let data = axios.get(url);
    return await data;
};
export default service;
