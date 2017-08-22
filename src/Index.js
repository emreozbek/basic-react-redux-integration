
import React from 'react'
import RenderDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'
import App from './App'
import reducers from './reducers'


const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

RenderDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('app'));
