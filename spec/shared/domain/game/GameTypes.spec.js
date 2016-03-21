/* eslint-disable new-cap*/
import ava from 'ava';
import Fixtures from '../../../specHelper/fixtures';

import {
    NewGameType,
    GameStatusType,
    GameType,
    GameListType,
    SingleGameStateType,
    ListGameStateType
} from '../../../../src/scripts/shared/domain/game/GameTypes';

const {
    VALID_NEW_GAME,
    // INVALID_NEW_GAME,
    VALID_GAME,
    INVALID_GAME,
    VALID_GAME_LIST,
    INVALID_GAME_LIST,
    VALID_GAME_STATE,
    VALID_GAME_LIST_STATE
} = Fixtures.game;

ava('NewGameType accepts valid data', t => {
    t.ok(NewGameType(VALID_NEW_GAME));
});

ava('GameStatusType accepts valid data', t => {
    t.ok(GameStatusType('wantit'), 'wantit');
    t.ok(GameStatusType('ownit'), 'ownit');

    t.throws(() => GameStatusType(''));
});

ava('GameType accepts valid data', t => {
    t.ok(GameType(VALID_GAME));

    t.throws(() => GameType(INVALID_GAME));
});

ava('GameListType accepts valid data', t => {
    t.ok(GameListType(VALID_GAME_LIST));

    t.throws(() => GameListType(INVALID_GAME_LIST));
});

ava('SingleGameStateType accepts valid data', t => {
    t.ok(SingleGameStateType(VALID_GAME_STATE));
});

ava('ListGameStateType accepts valid data', t => {
    t.ok(ListGameStateType(VALID_GAME_LIST_STATE));
});
