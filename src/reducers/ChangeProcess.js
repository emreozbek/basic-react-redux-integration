import {VALUE_CHANGED} from '../constants'
import initalState from '../stores'

export default (state = initalState, action) => {
    switch (action.type){
        case VALUE_CHANGED : return {
            ...state, value: action.payload
        }
        default:
            return state;
    }
}