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

ava('getSingleGame returns a GameType', async test => {
    const getSingleGame = nock(global.NOCK_SCOPE)
        .get('/games/1')
        .reply(200, Fixtures.game.VALID_GAME);

    const response = await GameRepository.getSingleGame(1);

    test.ok(getSingleGame.isDone());
    test.ok(response);
});

ava('getSingleGame completes request if there is a network error', async test => {
    const getSingleGame = nock(global.NOCK_SCOPE)
        .get('/games/1')
        .reply(500, 'Error');

    const error = await GameRepository.getSingleGame(1)
        .then(() => false)
        .catch(response => response.status === 500);

    test.ok(getSingleGame.isDone());
    test.ok(error);
});

ava('createGame returns a GameType', async test => {
    const newGameRequest = Fixtures.game.VALID_NEW_GAME;

    const createGame = nock(global.NOCK_SCOPE)
        .post('/games', newGameRequest)
        .reply(200, Fixtures.game.VALID_GAME);

    const response = await GameRepository.createGame(newGameRequest);

    test.ok(createGame.isDone());
    test.ok(response);
});

ava('createGame completes request if there is a network error', async test => {
    const newGameRequest = Fixtures.game.VALID_NEW_GAME;

    const createGame = nock(global.NOCK_SCOPE)
        .post('/games', newGameRequest)
        .reply(500, 'Error');

    const error = await GameRepository.createGame(newGameRequest)
        .then(() => false)
        .catch(response => response.status === 500);

    test.ok(createGame.isDone());
    test.ok(error);
});

ava('addVote returns a GameType', async test => {
    const addVoteRequest = Fixtures.baseType.VALID_UUID;

    const addVote = nock(global.NOCK_SCOPE)
        .post(`/games/${addVoteRequest}/vote`)
        .reply(200, Fixtures.game.VALID_GAME);

    const response = await GameRepository.addVote(addVoteRequest);

    test.ok(addVote.isDone());
    test.ok(response);
});

ava('addVote completes request if there is a network error', async test => {
    const addVoteRequest = Fixtures.baseType.VALID_UUID;

    const addVote = nock(global.NOCK_SCOPE)
        .post(`/games/${addVoteRequest}/vote`)
        .reply(500, 'Error');

    const error = await GameRepository.addVote(addVoteRequest)
        .then(() => false)
        .catch(response => response.status === 500);

    test.ok(addVote.isDone());
    test.ok(error);
});
