import { VALUE_CHANGED } from '../constants'

export const valueChanged = (value) =>{
    return (dispatch) => {
        dispatch({
            type: VALUE_CHANGED,
            payload: value
        })
    }
}