import React, { Component } from 'react'

 class Counter extends Component {
     constructor(){
         super();
         this.state={
             message:"Hello"
         };
     }
     inc_count()
     {
        this.setState({
            message:"GoodBye" 
          })
 
     }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>

                <button onClick={()=>this.inc_count()}>Increment Count</button>
            </div>
        )
    }
}

export default Counter
