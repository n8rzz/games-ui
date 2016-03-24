import React, {  PropTypes } from 'react';
import { connect } from 'react-redux';
import { getSingleGame } from '../../../domain/game/actions/SingleGameActions';
import SingleGameView from './SingleGameView';

/**
 * @class SingleGameContainer
 */
export class SingleGameContainer extends React.Component {
    /**
     * @method componentWillMount
     * @return {Function}
     */
    componentWillMount() {
        return this.props.getSingleGame(this.props.params.id);
    }

    /**
     * @method render
     * @return {JSX}
     */
    render() {
        return (
            <div>
                <SingleGameView { ...this.props } />
            </div>
        );
    }
}

/**
 * @property displayName
 * @type {String}
 */
SingleGameContainer.displayName = 'SingleGameContainer';

/**
 * @property propTypes
 * @type {Object}
 */
SingleGameContainer.propTypes = {
    /**
     * @props getSingleGame
     * @type {Function}
     */
    getSingleGame: PropTypes.func,

    /**
     * @props params
     * @type {Object}
     */
    params: PropTypes.object
};

/**
 * @method mapStateToProps
 * @param {Object} state
 * @return {Object}
 */
function mapStateToProps(state) {
    return {
        game: state.game.payload
    };
}

/**
 * @method mapDispatchToProps
 * @param {Object} dispatch
 * @return {Object}
 */
function mapDispatchToProps(dispatch) {
    return {
        getSingleGame: (id) => dispatch(getSingleGame(id))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SingleGameContainer);
