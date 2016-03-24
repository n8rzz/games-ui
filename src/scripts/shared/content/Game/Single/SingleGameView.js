import React, { PropTypes } from 'react';

/**
 * @class SingleGameView
 */
export default class SingleGameView extends React.Component {
    /**
     * @method _composeAddToOwned
     * @return {JSX}
     */
    _composeAddToOwned() {
        // TODO: change to enueration
        // if (this.props.game.status !== 'wantit') {
        //     return null;
        // }

        return (
            <a href="#">Add to Owned</a>
        );
    }

    /**
     * @method render
     * @return {JSX}
     */
    render() {
        const { game } = this.props;

        if (!game) {
            return null;
        }

        return (
            <div>
                <h2>{ game.title }</h2>
                <div>Status: { game.status }</div>
                <div>Votes: { game.votes }</div>
                { this._composeAddToOwned() }
            </div>
        );
    }
}

/**
 * @property displayName
 * @type {String}
 */
SingleGameView.displayName = 'SingleGameView';

/**
 * @props propTypes
 * @type {Object}
 */
SingleGameView.propTypes = {
    /**
     * @props game
     * @type {Object}
     */
    game: PropTypes.object
};
