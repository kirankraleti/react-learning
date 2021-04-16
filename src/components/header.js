import React, { Component } from 'react';

class Header extends Component {
    // we use methods like this in classes
    hello(){
        console.log("Hello");
    }
    inputChangeHandler = (event) => {
        console.log(event.target.value);
        this.hello();
    }
    /*inputChangeHandler(event){
        console.log(event.target.value);
        this.hello();
    }*/
    render(){
        // to interact with Events (called SyntheticEvents in React)
        return (
            <header>
                <div className="logo">Logo</div>
                <input
                    /*onChange={this.inputChangeHandler}*/
                    // to pass a value to function
                    // onChange={(e) => this.inputChangeHandler(e, 'example)}

                    //to call multiple methods from here
                    /*onChange={(e) => this.inputChangeHandler(e)}*/

                    // OR change the inputChangeHandler function
                    onChange={this.inputChangeHandler}
                />
            </header>
        )
    }
}

export default Header;