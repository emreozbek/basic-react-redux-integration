import React, {Component } from 'react'

export default class Textbox extends Component{
    constructor(){
        super();
    }
    changed(e){
        this.props.valueChanged(e.target.value);
    }
    render(){
        return (
            <input type="text" placeholder="Write something" onChange={this.changed.bind(this)} />
        )
    }
}