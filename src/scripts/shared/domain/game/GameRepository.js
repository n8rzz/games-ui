import request from 'axios';
// import { GameType } from './GameTypes';
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
    },

    /**
     * Add a single vote to a game
     *
     * @method addVote
     */
    addVote: id => {
        return request.post(`${ENDPOINT}/${id}/vote`)
            .then(response => response)
            .catch(error => {
                throw error;
            });
    },

    /**
     * Change a Game status from `wantit` to `ownit`
     *
     * @method purchaseGame
     */
    purchaseGame: id => {
        return request.post(`${ENDPOINT}/${id}/purchase`)
            .then(response => response)
            .catch(error => {
                throw error;
            });
    }
};
