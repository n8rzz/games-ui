import ava from 'ava';
import Fixtures from '../../../../specHelper/fixtures';

import {
    GET_SINGLE_GAME_START,
    GET_SINGLE_GAME_SUCCESS,
    GET_SINGLE_GAME_FAIL,
    CREATE_GAME_START,
    CREATE_GAME_SUCCESS,
    CREATE_GAME_FAIL
} from '../../../../../src/scripts/shared/domain/game/actions/SingleGameActions';

import reducer from '../../../../../src/scripts/shared/domain/game/reducers/SingleGameReducer';

const VALID_GAME = Fixtures.game.VALID_GAME;

ava('getSingleGame goes into loading state until data is resolved', test => {
    test.notThrows(() => {
        reducer(undefined, {
            type: GET_SINGLE_GAME_START
        });
    });

    const loadingState = reducer(undefined, {
        type: GET_SINGLE_GAME_START
    });

    test.true(loadingState.isLoading);
    test.is(loadingState.errors, null);
});

ava('getSingleGame sets payload', test => {
    test.notThrows(() => {
        reducer(undefined, {
            type: GET_SINGLE_GAME_SUCCESS,
            payload: VALID_GAME
        });
    });

    const loadingState = reducer(undefined, {
        type: GET_SINGLE_GAME_SUCCESS,
        payload: VALID_GAME
    });

    test.false(loadingState.isLoading);
    test.is(loadingState.errors, null);
});

ava('getSingleGame handles network errors by returning error state', test => {
    const networkError = new Error('network error');
    test.notThrows(() => {
        reducer(undefined, {
            type: GET_SINGLE_GAME_FAIL,
            errors: networkError
        });
    });

    const errorState = reducer(undefined, {
        type: GET_SINGLE_GAME_FAIL,
        errors: networkError
    });

    test.false(errorState.isLoading);
    test.is(errorState.errors, networkError);
});

ava('createGame goes into loading state until data is resolved', test => {
    test.notThrows(() => {
        reducer(undefined, {
            type: CREATE_GAME_START
        });
    });

    const loadingState = reducer(undefined, {
        type: CREATE_GAME_START
    });

    test.true(loadingState.isLoading);
    test.is(loadingState.errors, null);
});

ava('createGame sets payload', test => {
    test.notThrows(() => {
        reducer(undefined, {
            type: CREATE_GAME_SUCCESS,
            payload: VALID_GAME
        });
    });

    const loadingState = reducer(undefined, {
        type: CREATE_GAME_SUCCESS,
        payload: VALID_GAME
    });

    test.false(loadingState.isLoading);
    test.is(loadingState.errors, null);
});

ava('createGame handles network errors by returning error state', test => {
    const networkError = new Error('network error');
    test.notThrows(() => {
        reducer(undefined, {
            type: CREATE_GAME_FAIL,
            errors: networkError
        });
    });

    const errorState = reducer(undefined, {
        type: CREATE_GAME_FAIL,
        errors: networkError
    });

    test.false(errorState.isLoading);
    test.is(errorState.errors, networkError);
});
