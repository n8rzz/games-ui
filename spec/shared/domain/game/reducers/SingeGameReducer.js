import ava from 'ava';
import Fixtures from '../../../../specHelper/fixtures';

import {
    GET_SINGLE_GAME_START,
    GET_SINGLE_GAME_SUCCESS,
    GET_SINGLE_GAME_FAIL
} from '../../../../../src/scripts/shared/domain/game/actions/SingleGameActions';

import reducer from '../../../../../src/scripts/shared/domain/game/reducers/SingleGameReducer';

const VALID_GAME = { data: Fixtures.game.VALID_GAME };

ava('Single Game goes into loading state until data is resolved', test => {
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

ava('Single Game sets payload', test => {
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

ava('Single Game handles network errors by returning error state', test => {
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
