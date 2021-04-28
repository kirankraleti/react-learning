import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';

import './styles/style.css';
import DB from '../src/db.json';

import NewsList from './components/news_list';
import Footer from './components/footer';

class App extends Component {
    state = {
        news: DB,
        filtered: DB,
        footerText: 'I am a happy footer'
    }

    getKeywords = (event) => {
        let keywords = event.target.value;
        let filtered = this.state.news.filter((item) => {
            return item.title.indexOf(keywords) > -1;
        });
        this.setState({
            filtered
        });
    }

    // to pass data in state or Functions etc. to component like NewsList, we use PROPS
    render(){
        const {news, footerText, filtered} = this.state;
        return (
            <>
                <Header
                    keywords={this.getKeywords}
                />
                {/* <NewsList news={news}/> */}
                {/* OR to grab children like below */}
                <NewsList news={filtered}>
                    <br/>
                    <h1>I am a children</h1>
                </NewsList>
                {/* <Footer footerText={this.state.footerText}/> */}
                {/* OR */}
                <Footer footerText={footerText}/>
            </>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));