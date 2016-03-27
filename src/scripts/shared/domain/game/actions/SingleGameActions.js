import GameRepository from '../GameRepository';
import { getGamesList } from './GameListActions';

export const GET_SINGLE_GAME_START = 'GET_SINGLE_GAME_START';
export const GET_SINGLE_GAME_SUCCESS = 'GET_SINGLE_GAME_SUCCESS';
export const GET_SINGLE_GAME_FAIL = 'GET_SINGLE_GAME_FAIL';

/* istanbul ignore next */
const getSingleGameStart = () => ({
    type: GET_SINGLE_GAME_START
});

/* istanbul ignore next */
const getSingleGameSuccess = payload => ({
    type: GET_SINGLE_GAME_SUCCESS,
    payload: payload
});

/* istanbul ignore next */
const getSingleGameError = errors => ({
    type: GET_SINGLE_GAME_FAIL,
    payload: null,
    errors
});

export const getSingleGame = id => {
    return dispatch => {
        dispatch(getSingleGameStart());

        return GameRepository.getSingleGame(id)
            .then(response => dispatch(getSingleGameSuccess(response)))
            .catch(error => dispatch(getSingleGameError(error)));
    };
};

export const CREATE_GAME_START = 'CREATE_GAME_START';
export const CREATE_GAME_SUCCESS = 'CREATE_GAME_SUCCESS';
export const CREATE_GAME_FAIL = 'CREATE_GAME_FAIL';

/* istanbul ignore next */
const createGameStart = () => ({
    type: CREATE_GAME_START
});

/* istanbul ignore next */
const createGameSuccess = payload => ({
    type: CREATE_GAME_SUCCESS,
    payload: payload
});

/* istanbul ignore next */
const createGameError = errors => ({
    type: CREATE_GAME_FAIL,
    payload: null,
    errors
});

export const createGame = id => {
    return dispatch => {
        dispatch(createGameStart());

        return GameRepository.createGame(id)
            .then(response => dispatch(createGameSuccess(response)))
            .catch(error => dispatch(createGameError(error)));
    };
};

export const ADD_VOTE_START = 'ADD_VOTE_START';
export const ADD_VOTE_SUCCESS = 'ADD_VOTE_SUCCESS';
export const ADD_VOTE_FAIL = 'ADD_VOTE_FAIL';

/* istanbul ignore next */
const addVoteStart = () => ({
    type: ADD_VOTE_START
});

/* istanbul ignore next */
const addVoteSuccess = payload => ({
    type: ADD_VOTE_SUCCESS,
    payload: payload
});

/* istanbul ignore next */
const addVoteError = errors => ({
    type: ADD_VOTE_FAIL,
    payload: null,
    errors
});

/**
 * @method addVote
 * @param {UUID|String} id
 */
export const addVote = id => {
    return dispatch => {
        dispatch(addVoteStart());

        return GameRepository.addVote(id)
            .then(response => dispatch(addVoteSuccess(response)))
            .then(() => dispatch(getGamesList()))
            .catch(error => dispatch(addVoteError(error)));
    };
};

export const PURCHASE_GAME_START = 'PURCHASE_GAME_START';
export const PURCHASE_GAME_SUCCESS = 'PURCHASE_GAME_SUCCESS';
export const PURCHASE_GAME_FAIL = 'PURCHASE_GAME_FAIL';

/* istanbul ignore next */
const purchaseGameStart = () => ({
    type: PURCHASE_GAME_START
});

/* istanbul ignore next */
const purchaseGameSuccess = payload => ({
    type: PURCHASE_GAME_SUCCESS,
    payload: payload
});

/* istanbul ignore next */
const purchaseGameError = errors => ({
    type: PURCHASE_GAME_FAIL,
    payload: null,
    errors
});

/**
 * @method purchaseGame
 * @param {UUID|String} id
 */
export const purchaseGame = id => {
    return dispatch => {
        dispatch(purchaseGameStart());

        return GameRepository.purchaseGame(id)
            .then(response => dispatch(purchaseGameSuccess(response)))
            .then(() => dispatch(getGamesList()))
            .catch(error => dispatch(purchaseGameError(error)));
    };
};
