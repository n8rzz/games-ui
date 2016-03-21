import { createReducer } from 'redux-create-reducer';
import { ListGameStateType } from '../GameTypes';
import {
    GET_GAME_LIST_START,
    GET_GAME_LIST_SUCCESS,
    GET_GAME_LIST_FAIL
} from '../actions/GameListActions';

const INITIAL_STATE = new ListGameStateType({
    isLoading: false,
    payload: [],
    errors: null
});

const mergeState = (state, updates) => ListGameStateType.update(state, { $merge: updates });

export default createReducer(INITIAL_STATE, {
    [GET_GAME_LIST_START]: () => mergeState(
        INITIAL_STATE,
        {
            isLoading: true
        }
    ),

    [GET_GAME_LIST_SUCCESS]: (state, { payload }) => mergeState(
        state,
        {
            isLoading: false,
            payload: payload.data
        }
    ),

    [GET_GAME_LIST_FAIL]: (state, { errors }) => mergeState(
        state,
        {
            isLoading: false,
            errors
        }
    )
});
