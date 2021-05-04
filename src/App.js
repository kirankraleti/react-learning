import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {MyContext} from './context';

import Home from './components/home';
import Result from './components/result';

class App extends Component {

  static contextType = MyContext;

  render(){
    return (
      <div className="wrapper">
        <div className="center-wrapper">
          <h1>Who pays the bill?</h1>
          { this.context.state.stage === 1 ?
            <Home/> :
            <Result/>
          }
        </div>
      </div>
    )
  }
}

export default App;
