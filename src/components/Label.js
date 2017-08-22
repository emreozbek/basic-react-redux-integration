import React, {PropTypes, Component} from 'react'

export default class Label extends Component {
    static propTypes = {
        value: PropTypes.string
    }
    constructor() {
        super();
    }
    render() {
        return (<label>{this.props.value}</label>)
    }
}