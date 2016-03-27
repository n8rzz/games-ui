import GameRepository from '../GameRepository';

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

export const getSingleGame = (id) => {
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

export const createGame = (id) => {
    return dispatch => {
        dispatch(createGameStart());

        return GameRepository.createGame(id)
            .then(response => dispatch(createGameSuccess(response)))
            .catch(error => dispatch(createGameError(error)));
    };
};


export const addVote = (id) => {
    console.log('action.addVote: ', id);
};


export const addToOwned = (id) => {
    console.log('action.addToOwned: ', id);
};
