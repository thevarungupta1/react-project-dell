import React, { Component } from 'react';

class ClassBinding extends Component {
    
    constructor(){
        super()
        this.state = {
            message: 'Hello Guest'
        }

        //this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(){
        this.setState({
            message: 'Hello Watson'
        })
        console.log(this)
    }

    clickHandler = () => {
        this.setState({
            message: 'Hello Watson'
        })
        console.log(this)
    }

    render() { 
        return ( 
            <div>
                <h1>{ this.state.message }</h1>
                {/* <button onClick={this.onClickHandler.bind(this)}>button</button> */}
                {/* <button onClick={() => this.onClickHandler()}>Button</button> */}
                {/* <button onClick={this.onClickHandler}>Button</button> */}
                <button onClick={this.clickHandler}>button</button>
            </div>
         );
    }
}
 
export default ClassBinding;