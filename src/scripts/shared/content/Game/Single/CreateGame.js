import React, { PropTypes } from 'react';
import t from 'tcomb-form';
import { RaisedButton } from 'material-ui';
import { NewGameType } from '../../../domain/game/GameTypes';

const Form = t.form.Form;

/**
 * @class CreateGame
 */
class CreateGame extends React.Component {
    /**
     * @method render
     * @return {JSX}
     */
    render() {
        return (
            <div>
                <h1>Create a New Game</h1>

                <Form
                    ref="newGame"
                    type={ NewGameType } />

                <RaisedButton
                    primary={ true }
                    disabled={ false }
                    onClick={ this.onSubmit }>
                    Add Game
                </RaisedButton>
            </div>
        );
    }

    /**
     * @method onSibmit
     * @callback
     */
    onSubmit = () => {
        console.log('save: ', this.refs.newGame.getValue());
    };
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
};

export default CreateGame;
