import t from 'tcomb';
import { Positive, UUID } from '../BaseTypes';

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
    votes: Positive,
    status: GameStatusType
}, 'GameType');

export const GameListType = t.list( GameType, 'GameListType');
