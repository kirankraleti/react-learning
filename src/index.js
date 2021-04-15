import React from 'react';
import ReactDOM from 'react-dom';

// NOTE: we cannot include anything outside of src directory
import Header from './components/header';

import './styles/style.css';

// component - Functions or Classes
// In React, everything is component based

// component should always return a single statement
// It is not HTML, it is JSX
const App = () => {
    /*
    return  (
        <div className="hey">
            <h1>Hello</h1>
        </div>
    )*/
    // Below is what happens behind the scene
    // return React.createElement('h1', {className: 'title'}, 'Hello World')

    // OR
    
    /*
    return (
        <React.Fragment>
            <h1>Hello</h1>
            <h2>World</h2>
        </React.Fragment>
    )*/

    // Importing components

    return (
        <>
            <Header/>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));