import {combineReducers} from 'redux'
import changeReducer from './ChangeProcess'

export default combineReducers({
    response: changeReducer
});
