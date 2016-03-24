import { combineReducers } from 'redux';
import games from './domain/game/reducers/GameListReducer';
import game from './domain/game/reducers/SingleGameReducer';

export default () => combineReducers({
    games,
    game
});
