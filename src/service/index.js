import axios from 'axios';
import configArr from './config.json';
import PropTypes from 'prop-types';

const query = ['general', 'activity', 'average-sessions', 'performance'];

const service = async (userId, nbQuery) => {
    const config = configArr[1]; // Define this number to 1 if you want to use heroku, or 0 if you want to use local
    let url = `${config.baseUrl}${config.port ? ':' + config.port : ''}${
        config.dataPath
    }${userId}`;
    url += nbQuery > 0 ? '/' + query[nbQuery] : '';
    let data = axios.get(url).catch((e) => {
        if (e.response.status === 404)
            console.error('Data not found', e.response.status);
    });
    return await data;
};
service.propType = {
    userId: PropTypes.number,
    nbQuery: PropTypes.number,
};
export default service;
