import React, { Component } from 'react';


class Counter extends Component {
   
    constructor(){
        super();

        this.state = {
            count: 0
        }
    }

    incrementCount(){
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log('from callback', this.state.count)
        })
        console.log(this.state.count);
    }

    render() { 
        return ( 
            <div>
                <h1>{ this.state.count }</h1>
                <button onClick={() => this.incrementCount()}>Increment</button>
            </div>
         );
    }
}
 
export default Counter;