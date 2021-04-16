import React, { Component } from 'react';

class Header extends Component {
    //State in react is like a DB for this specific component

    //comes by default in class based component

    // below is a DB
    state = {
        keywords: ''
    }

    inputChangeHandler = (event) => {
        this.setState({
            keywords:event.target.value
        })
    }

    render(){
        return (
            <header>
                <div className="logo">Logo</div>
                <input
                    onChange={this.inputChangeHandler}
                />
            </header>
        )
    }
}

export default Header;