import t from 'tcomb';
import { UUID } from '../BaseTypes';

export const NewGameType = t.struct({
    title: t.String
}, 'NewGameType');

export const GameStatusType = t.enums({
    ownit: 'ownit',
    wantit: 'wantit'
}, 'GameStatusType');

export const GameType = t.struct({
    id: UUID,
    title: t.String,
    votes: t.Number,
    status: GameStatusType
}, 'GameType');

export const GameListType = t.list( GameType, 'GameListType');

const BaseGameStateType = t.struct({
    isLoading: t.Boolean,
    errors: t.maybe(t.Error)
});

export const SingleGameStateType = BaseGameStateType.extend({
    payload: t.maybe(GameType)
}, 'SingleGameStateType');

export const ListGameStateType = BaseGameStateType.extend({
    payload: t.maybe(GameListType)
}, 'ListGameStateType');
