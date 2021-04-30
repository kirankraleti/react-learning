
// FUNCTION BASED
/*import React from 'react';
import UserItem from './userItem';


const User = () => {

    return(
      <>
        <UserItem/>
      </>
    )
}

export default User; */

// BEST WAY IS TO USE FUNCTIONAL COMPONENTS WHEN USING CONTEXT

// CLASS BASED - access context from class
import React, {Component} from 'react';
import UserItem from './userItem';
import {MyContext} from '../context/index';

class User extends Component {
    // static properties load before everything
    // CAN ONLY USE 1 CONTEXT TYPE PER CLASS
    static contextType = MyContext;

    render(){
        console.log("CONTEXT", this.context);
        return (
            <>
                <UserItem/>
            </>
        )
    }
}

export default User; 