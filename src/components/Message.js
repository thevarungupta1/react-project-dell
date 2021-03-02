import React, { Component } from 'react';

class Message extends Component {
    
    constructor(){
        super();
        this.state = {
            message: 'Hello Guest!'
        }
    }

    onButtonClicked(){
        //console.log('button clicked')
        console.log(this);
        
        //this.state.message = 'Hello Mark';
        this.setState({
            message: 'Hello Mark'
        })
    }

    render() { 
        return ( 
           <div>
                <h1>{ this.state.message }</h1>
                <button onClick={() => this.onButtonClicked()}>Login</button>
           </div>
         );
    }
}
 
export default Message;
