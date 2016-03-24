import React, { PropTypes } from 'react';

export default class CreateGame extends React.Component {
    render() {
        return (
            <div>
                Create a New Game
            </div>
        );
    }
}

/**
 * @property displayName
 * @type {String}
 * @static
 */
CreateGame.displayName = 'CreateGame';

/**
 * @property propTypes
 * @type {Object}
 * @static
 */
CreateGame.propTypes = {
    /**
     * @props
     * @type Function
     */
    onCreateGame: PropTypes.func
}
