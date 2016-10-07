import React from 'react';
import Message from './message.js';

export default class extends React.Component{
    render(){
        return(
            <div className="list-group">
                {
                    this.props.messages.map((item,idx)=>{
                        return <Message key={idx} {...item} reduce={this.props.reduce}></Message>
                    })
                }
            </div>
        )
    }
}