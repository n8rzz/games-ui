import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getGamesList } from '../domain/game/actions/GameListActions';

/**
 * React entry component
 * All other components will inherit from this component
 *
 * @class  App
 */
export class App extends React.Component {

    /**
     * @method composeGameList
     * @return {JSX}
     */
    composeGameList() {
        const { games } = this.props;

        return games.map((game, index) => {
            return (
                <li key={ index }>
                    <div>ID: { game.id }</div>
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
                    <ul>
                        { this.composeGameList() }
                    </ul>
                </div>
            );
        }

        return (
            <div>
                <h1>This is a React app!</h1>
            </div>
        );
    }
}

/**
 * @props displayName
 * @type {String}
 */
App.displayName = 'App';

/**
 * @property {Object} propTypes
 * @type {Object}
 * @static
 */
App.propTypes = {
    /**
     * @props games
     * @type Array
     */
    games: PropTypes.array
};

/**
 * @method mapStateToProps
 * @param {Object} state
 * @return {Object}
 */
function mapStateToProps(state) {
    return {
        games: state.games.payload
    };
}

/**
 * @method mapDispatchToProps
 * @param {Object} dispatch
 * @return {Object}
 */
function mapDispatchToProps(dispatch) {
    return {
        games: dispatch(getGamesList())
    };
}

/**
 * @method mergeProps
 * @param {Object} state
 * @param {Object} dispatch
 * @param {Object} ownProps
 * @return {Object}
 */
function mergeProps(state, dispatch, ownProps) {
    return Object.assign({}, state, ownProps);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(App);
