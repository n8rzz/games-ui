import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import t from 'tcomb-form';
import { RaisedButton } from 'material-ui';
import { createGame } from '../../../domain/game/actions/SingleGameActions';
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
                    ref="newGameForm"
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
        const newGameFormValues = this.refs.newGameForm.getValue();

        if (newGameFormValues !== null) {
            console.log('save: ', newGameFormValues);
            this.props.createGame(newGameFormValues);
        }
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
    onCreateGame: PropTypes.func,

    /**
     * @props createGame
     * @type {Function}
     */
    createGame: PropTypes.func
};

/**
 * @method mapStateToProps
 * @return {Object}
 */
function mapStateToProps() {
    return {};
}

/**
 * @method mapDispatchToProps
 * @param {Object} dispatch
 * @return {Object}
 */
function mapDispatchToProps(dispatch) {
    return {
        createGame: (formValues) => dispatch(createGame(formValues))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateGame);
