import request from 'axios';
import { ENDPOINTS_GAMES } from '../endpoints';

const ENDPOINT = `${ENDPOINTS_GAMES}/games`;

export default {
    getGamesList: () => {
        return request.get(`${ENDPOINT}`)
            .then(response => response)
            .catch(error => {
                throw error;
            });
    }
};
