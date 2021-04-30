import React, { Component } from 'react';

/* when creating a context we need to create 2 things:
1. Context & Instance of a context
2. Provider*/

// context - used throughout the applications

const MyContext = React.createContext();

// provider

class MyProvider extends Component {

    state = {
        users: [
            {id: 1, name: 'Kiran'},
            {id: 2, name: 'Karthik'},
            {id: 3, name: 'Venky'}
        ],
        active: true
    };

    toggleActive = () => {
        this.setState({active: !this.state.active})
    }

    render(){
        return (
            // <MyContext.Provider value={this.state}>
            // {/* <MyContext.Provider value={{
                // users: this.state.users
                // }}> TO SEND SPECIFIC PROPERTY*/} 
                // // {this.props.children} {/*to send all propeties*/}

            <MyContext.Provider value={{
                users: this.state.users,
                active: this.state.active,
                toggleActive: this.toggleActive
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export { MyContext, MyProvider }