import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, BrowserRouter } from 'react-router-dom'


import store from './redux'

import App from './App'

const Router = process.env.NODE_ENV === 'production' ? BrowserRouter : HashRouter
ReactDOM.render(
    <Router>
        <App />
        {/* <Route path="/" component={App} /> */}
    </Router>
    ,
    document.querySelector('#app')
)