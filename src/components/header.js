import React, { Component } from 'react';

// function based component
/*const Header = () => {
    // with below we can only return single statement
    // What if we want to do some processing?

    // return (
    //     <div>
    //         The date is {Date.now()}
    //     </div>
    // )

    const getTheYear = () => {
        const newDate = new Date();
        return newDate.getFullYear();
    }
    return (
        <div>
            Current year is {getTheYear()}
        </div>
    )
}*/

// class based component
// cannot return directly from class. So we use extends

class Header extends Component {
    render(){
        // Below is for inline CSS styling
        /*return (
            <header style={styles.header}>
                <div style={styles.logo}>Logo</div>
                <input/>
            </header>
        )*/

        return (
            <header>
                <div className="logo">Logo</div>
                <input/>
            </header>
        )
    }
}

// move all this to public dir
/*let styles = {
    header: {
        background: "#03a9fa"
    },
    logo: {
        color: "#fff",
        fontFamily: 'Anton',
        textAlign: 'center'
    }
};*/

// can export only one "default" per file
export default Header;