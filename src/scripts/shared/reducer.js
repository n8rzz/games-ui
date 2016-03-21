import { combineReducers } from 'redux';
import games from './domain/game/reducers/GameListReducer';

export default () => combineReducers({
    games
});
