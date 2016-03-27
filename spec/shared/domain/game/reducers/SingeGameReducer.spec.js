import ava from 'ava';
import Fixtures from '../../../../specHelper/fixtures';

import {
    GET_SINGLE_GAME_START,
    GET_SINGLE_GAME_SUCCESS,
    GET_SINGLE_GAME_FAIL,

    CREATE_GAME_START,
    CREATE_GAME_SUCCESS,
    CREATE_GAME_FAIL,

    ADD_VOTE_START,
    ADD_VOTE_SUCCESS,
    ADD_VOTE_FAIL,

    PURCHASE_GAME_START,
    PURCHASE_GAME_SUCCESS,
    PURCHASE_GAME_FAIL
} from '../../../../../src/scripts/shared/domain/game/actions/SingleGameActions';

import reducer from '../../../../../src/scripts/shared/domain/game/reducers/SingleGameReducer';

const VALID_GAME = Fixtures.game.VALID_GAME;

ava('getSingleGame goes into loading state until data is resolved', t => {
    t.notThrows(() => {
        reducer(undefined, {
            type: GET_SINGLE_GAME_START
        });
    });

    const loadingState = reducer(undefined, {
        type: GET_SINGLE_GAME_START
    });

    t.true(loadingState.isLoading);
    t.is(loadingState.errors, null);
});

ava('getSingleGame sets payload', t => {
    t.notThrows(() => {
        reducer(undefined, {
            type: GET_SINGLE_GAME_SUCCESS,
            payload: VALID_GAME
        });
    });

    const loadingState = reducer(undefined, {
        type: GET_SINGLE_GAME_SUCCESS,
        payload: VALID_GAME
    });

    t.false(loadingState.isLoading);
    t.is(loadingState.errors, null);
});

ava('getSingleGame handles network errors by returning error state', t => {
    const networkError = new Error('network error');
    t.notThrows(() => {
        reducer(undefined, {
            type: GET_SINGLE_GAME_FAIL,
            errors: networkError
        });
    });

    const errorState = reducer(undefined, {
        type: GET_SINGLE_GAME_FAIL,
        errors: networkError
    });

    t.false(errorState.isLoading);
    t.is(errorState.errors, networkError);
});

ava('createGame goes into loading state until data is resolved', t => {
    t.notThrows(() => {
        reducer(undefined, {
            type: CREATE_GAME_START
        });
    });

    const loadingState = reducer(undefined, {
        type: CREATE_GAME_START
    });

    t.true(loadingState.isLoading);
    t.is(loadingState.errors, null);
});

ava('createGame sets payload', t => {
    t.notThrows(() => {
        reducer(undefined, {
            type: CREATE_GAME_SUCCESS,
            payload: VALID_GAME
        });
    });

    const loadingState = reducer(undefined, {
        type: CREATE_GAME_SUCCESS,
        payload: VALID_GAME
    });

    t.false(loadingState.isLoading);
    t.is(loadingState.errors, null);
});

ava('createGame handles network errors by returning error state', t => {
    const networkError = new Error('network error');
    t.notThrows(() => {
        reducer(undefined, {
            type: CREATE_GAME_FAIL,
            errors: networkError
        });
    });

    const errorState = reducer(undefined, {
        type: CREATE_GAME_FAIL,
        errors: networkError
    });

    t.false(errorState.isLoading);
    t.is(errorState.errors, networkError);
});

ava('addVote goes into loading state until data is resolved', t => {
    t.notThrows(() => {
        reducer(undefined, {
            type: ADD_VOTE_START
        });
    });

    const loadingState = reducer(undefined, {
        type: ADD_VOTE_START
    });

    t.true(loadingState.isLoading);
    t.is(loadingState.errors, null);
});

ava('addVote sets payload', t => {
    t.notThrows(() => {
        reducer(undefined, {
            type: ADD_VOTE_SUCCESS,
            payload: VALID_GAME
        });
    });

    const loadingState = reducer(undefined, {
        type: ADD_VOTE_SUCCESS,
        payload: VALID_GAME
    });

    t.false(loadingState.isLoading);
    t.is(loadingState.errors, null);
});

ava('addVote handles network errors by returning error state', t => {
    const networkError = new Error('network error');
    t.notThrows(() => {
        reducer(undefined, {
            type: ADD_VOTE_FAIL,
            errors: networkError
        });
    });

    const errorState = reducer(undefined, {
        type: ADD_VOTE_FAIL,
        errors: networkError
    });

    t.false(errorState.isLoading);
    t.is(errorState.errors, networkError);
});

ava('purchaseGame goes into loading state until data is resolved', t => {
    t.notThrows(() => {
        reducer(undefined, {
            type: PURCHASE_GAME_START
        });
    });

    const loadingState = reducer(undefined, {
        type: PURCHASE_GAME_START
    });

    t.true(loadingState.isLoading);
    t.is(loadingState.errors, null);
});

ava('purchaseGame sets payload', t => {
    t.notThrows(() => {
        reducer(undefined, {
            type: PURCHASE_GAME_SUCCESS,
            payload: VALID_GAME
        });
    });

    const loadingState = reducer(undefined, {
        type: PURCHASE_GAME_SUCCESS,
        payload: VALID_GAME
    });

    t.false(loadingState.isLoading);
    t.is(loadingState.errors, null);
});

ava('purchaseGame handles network errors by returning error state', t => {
    const networkError = new Error('network error');
    t.notThrows(() => {
        reducer(undefined, {
            type: PURCHASE_GAME_FAIL,
            errors: networkError
        });
    });

    const errorState = reducer(undefined, {
        type: PURCHASE_GAME_FAIL,
        errors: networkError
    });

    t.false(errorState.isLoading);
    t.is(errorState.errors, networkError);
});
