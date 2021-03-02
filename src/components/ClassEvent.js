import React, { Component } from 'react';

class ClassEvent extends Component {
    
    onButtonClickHandler(){
        console.log('button clicked')
    }

    render() { 
        return ( 
            <div>
                <button onClick={this.onButtonClickHandler}>Click</button>
            </div>
         );
    }
}
 
export default ClassEvent;