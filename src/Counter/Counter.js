import React from 'react';
import Auxiliary from '../hoc/Auxiliary'
import withClass from '../hoc/withClass'
import classes from './Counter.module.scss';


class Counter extends React.Component {
    state = { counter: 0 }


    addCounter = () => {
        this.setState((prevState) => {
            return {counter: prevState.counter + 1}
        })
    }
    render() {
        return (
            <Auxiliary>
                <h2>Counter {this.state.counter} </h2>
                <button onClick={this.addCounter}>|||+|||</button>
                <button onClick={() => this.setState({counter: this.state.counter - 1})} >|||-|||</button>
            </Auxiliary>
        )

        
        // կամ

        // return (
        //     <>
        //         <h2>Counter {this.state.counter} </h2>
        //         <button onClick={this.addCounter}>|||+|||</button>
        //         <button onClick={() => this.setState({counter: this.state.counter - 1})} >|||-|||</button>
        //     </>
        // )


        // կամ

        // return (
        //     <React.Fragment>
        //         <h2>Counter {this.state.counter} </h2>
        //         <button onClick={this.addCounter}>|||+|||</button>
        //         <button onClick={() => this.setState({counter: this.state.counter - 1})} >|||-|||</button>
        //     </React.Fragment>
        // )


        // կամ

        // return [
        //         <h2 key={'1'}>Counter {this.state.counter} </h2>,
        //         <button key={'2'} onClick={this.addCounter}>|||+|||</button>,
        //         <button key={'3'} onClick={() => this.setState({counter: this.state.counter - 1})} >|||-|||</button>
        // ]
    }
}

export default withClass(Counter, classes.Counter) 