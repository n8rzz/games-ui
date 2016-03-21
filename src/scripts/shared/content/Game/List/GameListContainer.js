import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getGamesList } from '../../../domain/game/actions/GameListActions';
import GameList from './GameList';

/**
 * React entry component
 * All other components will inherit from this component
 *
 * @class  GameListContainer
 */
export class GameListContainer extends React.Component {

    /**
     * @method  render
     * @return {JSX}
     */
    render() {
        return (
            <div>
                <GameList games={ this.props.games } />
            </div>
        );
    }
}

/**
 * @props displayName
 * @type {String}
 */
GameListContainer.displayName = 'GameListContainer';

/**
 * @property {Object} propTypes
 * @type {Object}
 * @static
 */
GameListContainer.propTypes = {
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
)(GameListContainer);
