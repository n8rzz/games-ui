import ava from 'ava';
import sinon from 'sinon'
import 'sinon-as-promised';

import {
    GET_SINGLE_GAME_START,
    GET_SINGLE_GAME_SUCCESS,
    GET_SINGLE_GAME_FAIL,
    getSingleGame,

    CREATE_GAME_START,
    CREATE_GAME_SUCCESS,
    CREATE_GAME_FAIL,
    createGame
} from '../../../../../src/scripts/shared/domain/game/actions/SingleGameActions';
import GameRepository from '../../../../../src/scripts/shared/domain/game/GameRepository';

ava('getSingleGame dispatches getSingleGame', async t => {
    const dispatchSpy = sinon.spy();
    GameRepository.getSingleGame = sinon.stub().resolves('Success');
    await getSingleGame()(dispatchSpy);

    t.ok(dispatchSpy.calledWith({ type: GET_SINGLE_GAME_START }));
});

ava('getSingleGame calls the repository', async t => {
    const dispatchSpy = sinon.spy();
    GameRepository.getSingleGame = sinon.stub().resolves('Success');
    await getSingleGame()(dispatchSpy);

    t.ok(GameRepository.getSingleGame.called);
});

ava('getSingleGame when successful dispatches success action', async t => {
    const dispatchSpy = sinon.spy();
    GameRepository.getSingleGame = sinon.stub().resolves('Success');
    await getSingleGame()(dispatchSpy);

    t.is(dispatchSpy.callCount, 2);
    const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

    t.is(objectPassedToSecondDispatch.type, GET_SINGLE_GAME_SUCCESS);
    t.is(objectPassedToSecondDispatch.payload, 'Success');
});

// ava('getSingleGame when failure dispatches fail action', async t => {
//     const dispatchSpy = sinon.spy();
//     GameRepository.getSingleGame = sinon.stub().rejects('Fail');
//     await getSingleGame()(dispatchSpy);
//
//     t.is(dispatchSpy.callCount, 2);
//     const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];
//
//     console.log(objectPassedToSecondDispatch);
//     t.is(objectPassedToSecondDispatch.type, GET_SINGLE_GAME_FAIL);
//     t.is(objectPassedToSecondDispatch.payload.message, 'Fail');
// });

ava('createGame dispatches createGame', async t => {
    const dispatchSpy = sinon.spy();
    GameRepository.createGame = sinon.stub().resolves('Success');
    await createGame()(dispatchSpy);

    t.ok(dispatchSpy.calledWith({ type: CREATE_GAME_START }));
});

ava('createGame calls the repository', async t => {
    const dispatchSpy = sinon.spy();
    GameRepository.createGame = sinon.stub().resolves('Success');
    await createGame()(dispatchSpy);

    t.ok(GameRepository.createGame.called);
});

ava('createGame when successful dispatches success action', async t => {
    const dispatchSpy = sinon.spy();
    GameRepository.createGame = sinon.stub().resolves('Success');
    await createGame()(dispatchSpy);

    t.is(dispatchSpy.callCount, 2);
    const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

    t.is(objectPassedToSecondDispatch.type, CREATE_GAME_SUCCESS);
    t.is(objectPassedToSecondDispatch.payload, 'Success');
});

// ava('createGame when failure dispatches fail action', async t => {
//     const dispatchSpy = sinon.spy();
//     GameRepository.createGame = sinon.stub().rejects('Fail');
//     await createGame()(dispatchSpy);
//
//     t.is(dispatchSpy.callCount, 2);
//     const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];
//
//     console.log(objectPassedToSecondDispatch);
//     t.is(objectPassedToSecondDispatch.type, GET_SINGLE_GAME_FAIL);
//     t.is(objectPassedToSecondDispatch.payload.message, 'Fail');
// });
