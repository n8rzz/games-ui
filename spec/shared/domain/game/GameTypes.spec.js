/* eslint-disable new-cap*/
import ava from 'ava';
import Fixtures from '../../../specHelper/fixtures';

import {
    NewGameType,
    GameStatusType,
    GameType,
    GameListType
} from '../../../../src/scripts/shared/domain/game/GameTypes';

const {
    VALID_NEW_GAME,
    // INVALID_NEW_GAME,
    VALID_GAME,
    INVALID_GAME,
    VALID_GAME_LIST,
    INVALID_GAME_LIST
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
