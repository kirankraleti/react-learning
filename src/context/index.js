import React,{Component} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyContext = React.createContext();

class MyProvider extends Component {

    state = {
        stage: 1,
        players: [],
        result: ''
    }

    addPlayer = (name) => {
        this.setState((prevState)=>({
            players:[
                ...prevState.players,
                name
            ]
        }));
    }

    removePlayer = (idx) => {
        let newArray = this.state.players;
        newArray.splice(idx, 1);
        this.setState({players: newArray});
    }

    nextHandler = () => {
        const { players } = this.state;
        if(players.length < 2){
            toast.error("You need more than one player!", {
                position: toast.POSITION.TOP_LEFT,
                autoClose: 2000
            });
        } else {
            this.setState({
                stage: 2
            }, () => {
                setTimeout(() => {
                    this.generateLooser()
                }, 2000)
            });
        }
    }

    resetGame = () => {
        this.setState({
            stage: 1,
            players: [],
            result: ''
        });
    }

    generateLooser = () => {
        const { players } = this.state;
        this.setState({
            result: players[Math.floor(Math.random() * players.length)]
        });
    }

    render(){
        return (
            <>
            <MyContext.Provider value={{
                state: this.state,
                addPlayer: this.addPlayer,
                removePlayer: this.removePlayer,
                next: this.nextHandler,
                resetGame: this.resetGame,
                getNewLooser: this.generateLooser
            }}>
                {this.props.children}
            </MyContext.Provider>
            <ToastContainer/>
            </>
        )
    }
}

export {
    MyContext, 
    MyProvider
};