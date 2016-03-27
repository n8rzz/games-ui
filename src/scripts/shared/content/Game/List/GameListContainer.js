import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getGamesList } from '../../../domain/game/actions/GameListActions';
import {
    addVote,
    purchaseGame
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
                    onAddVote={ this.onAddVote }
                    onPurchaseGame={ this.onPurchaseGame } />
            </div>
        );
    }


    /**
     * @method onAddVote
     * @param {UUID|String} id
     * @callback
     */
    onAddVote = id => {
        return this.props.addVote(id);
    }

    /**
     * @method onPurchaseGame
     * @param {UUID|String} id
     * @callback
     */
    onPurchaseGame = id => {
        console.log('onPurchaseGame: ', id);
        return this.props.purchaseGame(id);
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
     * @props purchaseGame
     * @type {Function}
     */
    purchaseGame: PropTypes.func
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
        purchaseGame: (id) => dispatch(purchaseGame(id))
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
