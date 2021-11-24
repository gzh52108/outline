const express = require('express')

const app = express();

app.use(express.static('../public'))

app.listen(2108,()=>{
    console.log('server is running')
})

// http://120.76.5.12:2108/#/home
// http://120.76.5.12:2108/manage/#/home