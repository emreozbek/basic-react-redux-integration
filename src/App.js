import React, {Component} from 'react'
import { connect } from 'react-redux'
import Label from './components/Label'
import Textbox from './components/Textbox'
import { valueChanged } from './actions'


class App extends Component{
    render(){
        return(
            <div>
                <div>
                    <Textbox valueChanged={this.props.valueChanged} />
                </div>
                <div>
                    <Label value={this.props.value} />
                </div>
            </div>
        )
    }
}
const mapStateToProps =  ({response}) => {
    const {value} = response;
    return {
        value
    };
};
export default connect(mapStateToProps, {valueChanged})(App)

