import React, { PropTypes } from 'react';
import { Link } from 'react-router';

/**
 * React entry component
 * All other components will inherit from this component
 *
 * @class  App
 */
export class App extends React.Component {

    /**
     * @method  render
     * @return {JSX}
     */
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">Games</Link>
                    </li>
                    <li>
                        <Link to="/games/create">Add Game</Link>
                    </li>
                </ul>
                { this.props.children }
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
    children: PropTypes.object
};

export default App;
