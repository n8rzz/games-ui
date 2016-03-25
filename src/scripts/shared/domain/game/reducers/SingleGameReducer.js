import { createReducer } from 'redux-create-reducer';
import { SingleGameStateType } from '../GameTypes';
import {
    GET_SINGLE_GAME_START,
    GET_SINGLE_GAME_SUCCESS,
    GET_SINGLE_GAME_FAIL,

    CREATE_GAME_START,
    CREATE_GAME_SUCCESS,
    CREATE_GAME_FAIL
} from '../actions/SingleGameActions';

const INITIAL_STATE = new SingleGameStateType({
    isLoading: false,
    payload: null,
    errors: null
});

const mergeState = (state, updates) => SingleGameStateType.update(state, { $merge: updates });

export default createReducer(INITIAL_STATE, {
    [GET_SINGLE_GAME_START]: () => mergeState(
        INITIAL_STATE,
        {
            isLoading: true
        }
    ),

    [GET_SINGLE_GAME_SUCCESS]: (state, { payload }) => mergeState(
        state,
        {
            isLoading: false,
            payload: payload.data
        }
    ),

    [GET_SINGLE_GAME_FAIL]: (state, { errors }) => mergeState(
        state,
        {
            isLoading: false,
            errors
        }
    ),

    [CREATE_GAME_START]: () => mergeState(
        INITIAL_STATE,
        {
            isLoading: true
        }
    ),

    [CREATE_GAME_SUCCESS]: (state, { payload }) => mergeState(
        state,
        {
            isLoading: false,
            payload: payload.data
        }
    ),

    [CREATE_GAME_FAIL]: (state, { errors }) => mergeState(
        state,
        {
            isLoading: false,
            errors
        }
    )
});
