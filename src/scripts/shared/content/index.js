import React, { PropTypes } from 'react';

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
                <div>HEADER</div>

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
