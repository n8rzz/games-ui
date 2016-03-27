import ava from 'ava';
import sinon from 'sinon';
import 'sinon-as-promised';

import {
    GET_SINGLE_GAME_START,
    GET_SINGLE_GAME_SUCCESS,
    GET_SINGLE_GAME_FAIL,
    getSingleGame,

    CREATE_GAME_START,
    CREATE_GAME_SUCCESS,
    CREATE_GAME_FAIL,
    createGame,

    ADD_VOTE_START,
    ADD_VOTE_SUCCESS,
    ADD_VOTE_FAIL,
    addVote,

    PURCHASE_GAME_START,
    PURCHASE_GAME_SUCCESS,
    PURCHASE_GAME_FAIL,
    purchaseGame
} from '../../../../../src/scripts/shared/domain/game/actions/SingleGameActions';

import { getGamesList } from '../../../../../src/scripts/shared/domain/game/actions/GameListActions';
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

ava('getSingleGame when failure dispatches fail action', async t => {
    const dispatchSpy = sinon.spy();
    GameRepository.getSingleGame = sinon.stub().rejects('Fail');
    await getSingleGame()(dispatchSpy);

    t.is(dispatchSpy.callCount, 2);
    const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

    t.is(objectPassedToSecondDispatch.type, GET_SINGLE_GAME_FAIL);
    t.is(objectPassedToSecondDispatch.errors.message, 'Fail');
});

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

ava('createGame when failure dispatches fail action', async t => {
    const dispatchSpy = sinon.spy();
    GameRepository.createGame = sinon.stub().rejects('Fail');
    await createGame()(dispatchSpy);

    t.is(dispatchSpy.callCount, 2);
    const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

    t.is(objectPassedToSecondDispatch.type, CREATE_GAME_FAIL);
    t.is(objectPassedToSecondDispatch.errors.message, 'Fail');
});

ava('addVote dispatches addVote', async t => {
    const dispatchSpy = sinon.spy();
    GameRepository.addVote = sinon.stub().resolves('Success');
    await addVote()(dispatchSpy);

    t.ok(dispatchSpy.calledWith({ type: ADD_VOTE_START }));
});

ava('addVote calls the repository', async t => {
    const dispatchSpy = sinon.spy();
    GameRepository.addVote = sinon.stub().resolves('Success');
    await addVote()(dispatchSpy);

    t.ok(GameRepository.addVote.called);
});

ava('addVote when successful dispatches success action', async t => {
    const dispatchSpy = sinon.spy();
    GameRepository.addVote = sinon.stub().resolves('Success');
    await addVote()(dispatchSpy);

    t.is(dispatchSpy.callCount, 3);
    const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

    t.is(objectPassedToSecondDispatch.type, ADD_VOTE_SUCCESS);
    t.is(objectPassedToSecondDispatch.payload, 'Success');
});

ava('addVote when failure dispatches fail action', async t => {
    const dispatchSpy = sinon.spy();
    GameRepository.addVote = sinon.stub().rejects('Fail');
    await addVote()(dispatchSpy);

    t.is(dispatchSpy.callCount, 2);
    const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

    t.is(objectPassedToSecondDispatch.type, ADD_VOTE_FAIL);
    t.is(objectPassedToSecondDispatch.errors.message, 'Fail');
});

ava('purchaseGame dispatches purchaseGame', async t => {
    const dispatchSpy = sinon.spy();
    GameRepository.purchaseGame = sinon.stub().resolves('Success');
    await purchaseGame()(dispatchSpy);

    t.ok(dispatchSpy.calledWith({ type: PURCHASE_GAME_START }));
});

ava('purchaseGame calls the repository', async t => {
    const dispatchSpy = sinon.spy();
    GameRepository.purchaseGame = sinon.stub().resolves('Success');
    await purchaseGame()(dispatchSpy);

    t.ok(GameRepository.purchaseGame.called);
});

ava('purchaseGame when successful dispatches success action', async t => {
    const dispatchSpy = sinon.spy();
    GameRepository.purchaseGame = sinon.stub().resolves('Success');
    await purchaseGame()(dispatchSpy);

    t.is(dispatchSpy.callCount, 3);
    const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

    t.is(objectPassedToSecondDispatch.type, PURCHASE_GAME_SUCCESS);
    t.is(objectPassedToSecondDispatch.payload, 'Success');
});

ava('purchaseGame when failure dispatches fail action', async t => {
    const dispatchSpy = sinon.spy();
    GameRepository.purchaseGame = sinon.stub().rejects('Fail');
    await purchaseGame()(dispatchSpy);

    t.is(dispatchSpy.callCount, 2);
    const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

    t.is(objectPassedToSecondDispatch.type, PURCHASE_GAME_FAIL);
    t.is(objectPassedToSecondDispatch.errors.message, 'Fail');
});
