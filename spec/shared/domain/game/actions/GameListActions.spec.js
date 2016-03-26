import ava from 'ava';
import sinon from 'sinon';
import 'sinon-as-promised';

import {
    GET_GAME_LIST_START,
    GET_GAME_LIST_SUCCESS,
    GET_GAME_LIST_FAIL,
    getGamesList
} from '../../../../../src/scripts/shared/domain/game/actions/GameListActions';
import GameRepository from '../../../../../src/scripts/shared/domain/game/GameRepository';

import Fixtures from '../../../../specHelper/fixtures';

ava('getGamesList dispatches getGameListStart', async t => {
    const dispatchSpy = sinon.spy();
    GameRepository.getGamesList = sinon.stub().resolves('Success');
    await getGamesList()(dispatchSpy);

    t.ok(dispatchSpy.calledWith({ type: GET_GAME_LIST_START }));
});

ava('getGamesList calls the repository', async t => {
    const dispatchSpy = sinon.spy();
    GameRepository.getGamesList = sinon.stub().resolves('Success');
    await getGamesList()(dispatchSpy);

    t.ok(GameRepository.getGamesList.called);
});

ava('getGamesList when successful dispatches success action', async t => {
    const dispatchSpy = sinon.spy();
    GameRepository.getGamesList = sinon.stub().resolves('Success');
    await getGamesList()(dispatchSpy);

    t.is(dispatchSpy.callCount, 2);
    const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

    t.is(objectPassedToSecondDispatch.type, GET_GAME_LIST_SUCCESS);
    t.is(objectPassedToSecondDispatch.payload, 'Success');
});

ava('getGamesList when failure dispatches fail action', async t => {
    const dispatchSpy = sinon.spy();
    GameRepository.getGamesList = sinon.stub().rejects('Fail');
    await getGamesList()(dispatchSpy);

    t.is(dispatchSpy.callCount, 2);
    const objectPassedToSecondDispatch = dispatchSpy.getCall(1).args[0];

    t.is(objectPassedToSecondDispatch.type, GET_GAME_LIST_FAIL);
    t.is(objectPassedToSecondDispatch.errors.message, 'Fail');
});
