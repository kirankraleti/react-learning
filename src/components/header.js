import React, { Component } from 'react';

class Header extends Component {
    //State in react is like a DB for this specific component

    //comes by default in class based component

    // below is a DB
    state = {
        name: 'kiran',
        title: 'Keywords are:',
        keywords: '',
        count: 0
    }

    inputChangeHandler = (event) => {
        this.setState({
            keywords:event.target.value
        })
    }

    addOne(){
        // this.setState({count: this.state.count + 1})
        // OR
        this.setState((state) => ({
            count: state.count +1
        }))
    }

    render(){
        return (
            <header>
                <div className="logo">Logo</div>
                <input
                    onChange={this.inputChangeHandler}
                />
                <div>{ this.state.title }</div>
                <div>{ this.state.keywords }</div>
                <div>{ this.state.count }</div>
                <button onClick={() => this.addOne() }>Button</button>
            </header>
        )
    }
}

export default Header;