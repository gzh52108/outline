import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, BrowserRouter } from 'react-router-dom'

const Router = process.env.NODE_ENV === 'production' ? BrowserRouter : HashRouter

import App from './App'

ReactDOM.render(
    <Router>
        <App />
        {/* <Route path="/" component={App} /> */}
    </Router>
    ,
    document.querySelector('#app')
)