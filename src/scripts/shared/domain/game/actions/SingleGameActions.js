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
    type: GET_SINGLE_GAME_SUCCESS,
    payload: null,
    errors
});

export const getSingleGame = (id) => {
    return dispatch => {
        dispatch(getSingleGameStart());

        return GameRepository.getSingleGame(id)
            .then(response => dispatch(getSingleGameSuccess(response)))
            .catch(error => {
                dispatch(getSingleGameError(error));
                throw error;
            });
    };
};
