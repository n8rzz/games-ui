import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { RaisedButton } from 'material-ui';


/**
 * React entry component
 * All other components will inherit from this component
 *
 * @class  GameList
 */
export default class GameList extends React.Component {

    /**
     * @method _composeAddVote
     * @param {GameType|Object} game
     * @return {JSX}
     */
    _composeAddVote(game) {
        // TODO: replace with enum
        if (game.status !== 'wantit') {
            return null;
        }

        return (
            <div>
                <RaisedButton
                    primary={ true }
                    disabled={ false }
                    onClick={ () => this.props.onAddVote(game.id) }>
                    + Add Vote
                </RaisedButton>
            </div>
        );
    }

    /**
     * @method _composeAddToOwned
     * @param {GameType|Object} game
     * @return {JSX}
     */
    _composeAddToOwned(game) {
        // TODO: replace with enum
        if (game.status !== 'wantit') {
            return null;
        }

        return (
            <div>
                <RaisedButton
                    primary={ false }
                    disabled={ false }
                    onClick={ () => this.props.onPurchaseGame(game.id) }>
                    + Add To Owned
                </RaisedButton>
            </div>
        );
    }

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
                        <h2>
                            <Link to={ pathToSingleGame }>{ game.title }</Link>
                        </h2>
                    </div>
                    <div>ID: { game.id }</div>
                    <div>Votes: { game.votes }</div>
                    <div>Status: { game.status }</div>
                    { this._composeAddVote(game) }
                    { this._composeAddToOwned(game) }
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
    games: PropTypes.array,

    /**
     * @props onAddVote
     * @type {Function}
     */
    onAddVote: PropTypes.func,

    /**
     * @props onPurchaseGame
     * @type {Function}
     */
    onPurchaseGame: PropTypes.func
};
