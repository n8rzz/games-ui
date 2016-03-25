import request from 'axios';
import { ENDPOINTS_GAMES } from '../endpoints';

const ENDPOINT = `${ENDPOINTS_GAMES}/games`;

export default {
    /**
     * Return a list of Game objects
     *
     * @method getGamesList
     * @return {Array}
     */
    getGamesList: () => {
        return request.get(`${ENDPOINT}`)
            .then(response => response)
            .catch(error => {
                throw error;
            });
    },

    /**
     * Return a single game object
     *
     * @method getSingleGame
     */
    getSingleGame: id => {
        return request.get(`${ENDPOINT}/${id}`)
            .then(response => response)
            .catch(error => {
                throw error;
            });
    },

    /**
     * Creates a new game object
     *
     * @method createGame
     */
    createGame: formValues => {
        return request.post(`${ENDPOINT}`, formValues)
            .then(response => response)
            .catch(error => {
                throw error;
            });
    }
};
