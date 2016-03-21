import ava from 'ava';
import nock from 'nock';

import Fixtures from '../../../specHelper/fixtures';

import GameRepository from '../../../../src/scripts/shared/domain/game/GameRepository';

ava('getGamesList returns a GameListType', async test => {
    const getGamesList = nock(global.NOCK_SCOPE)
        .get('/games')
        .reply(200, Fixtures.game.VALID_GAME_LIST);

    const response = await GameRepository.getGamesList();

    test.ok(getGamesList.isDone());
    test.ok(response);
});

ava('getGamesList completes request if there is a network error', async test => {
    const getGamesList = nock(global.NOCK_SCOPE)
        .get('/games')
        .reply(500, 'Error');

    const error = await GameRepository.getGamesList()
        .then(() => false)
        .catch(response => response.status === 500);

    test.ok(getGamesList.isDone());
    test.ok(error);
});
