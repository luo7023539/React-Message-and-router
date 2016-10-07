import React from 'react';

export default class extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id:props.params.id
        }
    }
    render(){
        return <p>{this.state.id}</p>
    }
}