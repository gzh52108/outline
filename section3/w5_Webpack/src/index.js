import ReactDOM from 'react-dom'
import React from 'react'

import App from './App'

ReactDOM.render(
    // <div>Hello React</div>
    // React.createElement('div',null,'App')
    <App/>
    ,
    document.querySelector('#app') // document.getElementById('app')
)