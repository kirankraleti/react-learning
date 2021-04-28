// lifecycles can only be used in class based component
import React,{Component} from 'react';

class Life extends Component{
    // first thing that kicks in
    constructor(props){
        super(props);
        this.state = {name: 'Kiran'}; //if we do not use this.state, it will override
        console.log('1-Constructor');
    }

    // first lifecycle that kicks in after constructor
    static getDerivedStateFromProps(props, state){ 
        console.log('2-getDerivedStateFromProps');
        console.log('2-props: ', props);
        console.log('2-state: ', state);
        // return null;
        if(state.name === 'Karthik'){
            return {
                name: 'NotKarthik'
            }
        }
        return null;
    }

    // fires when everything is ready
    componentDidMount(){
        console.log('4-componentDidMount');
    }

    // to trigger when component is removed from screen
    componentWillUnmount(){
        console.log('5-componentWillUnmount');
    }


    // UPDATE LIFECYCLES - NO SPECIFIC ORDER

    shouldComponentUpdate(nextProps, nextState){
        // should return a boolean
        console.log('6-shouldComponentUpdate');
        console.log('6-nextState: ', nextState);
        console.log('6-prevState: ', this.state);

        return nextState.name === 'Karthik' ? true : false;
        // return true; //renders only if true
    }

    // stores a snapshot of previous stuff and saves in memory
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('x-getSnapshotBeforeUpdate');
        console.log('x-prevProps: ', prevProps);
        console.log('x-prevState: ', prevState);
        let age = 20;
        return age;
    }

    // gets triggered if component is updated
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('7-componentDidUpdate');
        console.log('7-prevState: ', prevState);
        console.log('7-currentState: ', this.state);
        console.log("snapshot", snapshot); // from above lifecycle 'getSnapshotBeforeUpdate' 
    }

    render(){
        console.log('3-Render');
        return (
            <div>
                <div>{this.state.name}</div>
                <div onClick={()=> this.setState({name: 'Karthik'})}>
                    change name
                </div>
            </div>
        )
    }

}

export default Life;