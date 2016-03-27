import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getGamesList } from '../../../domain/game/actions/GameListActions';
import {
    addVote,
    addToOwned
} from '../../../domain/game/actions/SingleGameActions';
import GameList from './GameList';

/**
 * @class  GameListContainer
 */
export class GameListContainer extends React.Component {

    /**
     * @method componentWillMount
     */
    componentWillMount() {
        return this.props.getGamesList();
    }

    /**
     * @method render
     * @return {JSX}
     */
    render() {
        return (
            <div>
                <GameList
                    games={ this.props.games }
                    onAddVote={ this.addVote }
                    onAddToOwned={ this.addToOwned } />
            </div>
        );
    }


    /**
     * @method addVote
     * @param {UUID|String} id
     * @callback
     */
    addVote = (id) => {
        return this.props.addVote(id);
    }

    /**
     * @method addToOwned
     * @param {UUID|String} id
     * @callback
     */
    addToOwned = (id) => {
        console.log('addToOwned: ', id);
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
    games: PropTypes.array,

    /**
     * @props getGamesList
     * @type {Function}
     */
    getGamesList: PropTypes.func,

    /**
     * @props addVote
     * @type {Function}
     */
    addVote: PropTypes.func,

    /**
     * @props addToOwned
     * @type {Function}
     */
    addToOwned: PropTypes.func
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
        getGamesList: () => dispatch(getGamesList()),
        addVote: (id) => dispatch(addVote(id)),
        addToOwned: (id) => dispatch(addToOwned(id))
    };
}

/**
 * @method mergeProps
 * @param {Object} state
 * @param {Object} dispatch
 * @param {Object} ownProps
 * @return {Object}
 */
// function mergeProps(state, dispatch, ownProps) {
//     console.log(state, dispatch, ownProps);
//     return Object.assign({}, state, ownProps);
// }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameListContainer);
