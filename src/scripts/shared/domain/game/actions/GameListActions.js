import GameRepository from '../GameRepository';

export const GET_GAME_LIST_START = 'GET_GAME_LIST_START';
export const GET_GAME_LIST_SUCCESS = 'GET_GAME_LIST_SUCCESS';
export const GET_GAME_LIST_FAIL = 'GET_GAME_LIST_FAIL';

/* istanbul ignore next */
const getGameListStart = () => ({
    type: GET_GAME_LIST_START
});

/* istanbul ignore next */
const getGameListSuccess = payload => ({
    type: GET_GAME_LIST_SUCCESS,
    payload: payload
});

/* istanbul ignore next */
const getGameListError = errors => ({
    type: GET_GAME_LIST_FAIL,
    payload: null,
    errors
});

export const getGamesList = () => {
    return dispatch => {
        dispatch(getGameListStart());

        return GameRepository.getGamesList()
            .then(response => dispatch(getGameListSuccess(response)))
            .catch(error => dispatch(getGameListError(error)));
    };
};
