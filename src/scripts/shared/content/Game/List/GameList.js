import React, { PropTypes } from 'react';
import { Link } from 'react-router';

/**
 * React entry component
 * All other components will inherit from this component
 *
 * @class  GameList
 */
export default class GameList extends React.Component {

    /**
     * @method composeGameList
     * @return {JSX}
     */
    composeGameList() {
        const { games } = this.props;

        return games.map((game, index) => {
            const pathToSingleGame = `/games/${game.id}`;

            return (
                <li key={ index }>
                    <div>
                        ID: <Link to={ pathToSingleGame }>{ game.id }</Link>
                    </div>
                    <div>Title: { game.title }</div>
                    <div>Votes: { game.votes }</div>
                    <div>Status: { game.status }</div>
                </li>
            );
        });
    }

    /**
     * @method  render
     * @return {JSX}
     */
    render() {
        if (this.props.games) {
            return (
                <div>
                    <h1>Games</h1>
                    <div>
                        <Link to="games/create">Add Game</Link>
                    </div>
                    <ul>
                        { this.composeGameList() }
                    </ul>
                </div>
            );
        }

        return (
            <div>
                <h1>It seems there aren't any games to display.</h1>
            </div>
        );
    }
}

/**
 * @props displayName
 * @type {String}
 */
GameList.displayName = 'GameList';

/**
 * @property {Object} propTypes
 * @type {Object}
 * @static
 */
GameList.propTypes = {
    /**
     * @props games
     * @type Array
     */
    games: PropTypes.array
};
