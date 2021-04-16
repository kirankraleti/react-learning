import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';

import './styles/style.css';
import DB from '../src/db.json';

import NewsList from './components/news_list';

class App extends Component {
    state = {
        news: DB
    }

    // to pass data in state or Functions etc. to component like NewsList, we use PROPS
    render(){
        return (
            <>
                <Header/>
                <NewsList
                    news={this.state.news}
                />
            </>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));