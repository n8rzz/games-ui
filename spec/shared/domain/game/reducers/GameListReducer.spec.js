import ava from 'ava';
import Fixtures from '../../../../specHelper/fixtures';

import {
    GET_GAME_LIST_START,
    GET_GAME_LIST_SUCCESS,
    GET_GAME_LIST_FAIL
} from '../../../../../src/scripts/shared/domain/game/actions/GameListActions';

import reducer from '../../../../../src/scripts/shared/domain/game/reducers/GameListReducer';

const VALID_GAME_LIST = { data: Fixtures.game.VALID_GAME_LIST };

ava('Games reducer goes into loading state until data is resolved', test => {
    test.notThrows(() => {
        reducer(undefined, {
            type: GET_GAME_LIST_START
        });
    });

    const loadingState = reducer(undefined, {
        type: GET_GAME_LIST_START
    });

    test.true(loadingState.isLoading);
    test.is(loadingState.errors, null);
});

ava('Games reducer sets payload', test => {
    test.notThrows(() => {
        reducer(undefined, {
            type: GET_GAME_LIST_SUCCESS,
            payload: VALID_GAME_LIST
        });
    });

    const loadingState = reducer(undefined, {
        type: GET_GAME_LIST_SUCCESS,
        payload: VALID_GAME_LIST
    });

    test.false(loadingState.isLoading);
    test.is(loadingState.errors, null);
});

ava('Games reducer handles network errors by returning error state', test => {
    const networkError = new Error('network error');
    test.notThrows(() => {
        reducer(undefined, {
            type: GET_GAME_LIST_FAIL,
            errors: networkError
        });
    });

    const errorState = reducer(undefined, {
        type: GET_GAME_LIST_FAIL,
        errors: networkError
    });

    test.false(errorState.isLoading);
    test.is(errorState.errors, networkError);
});
