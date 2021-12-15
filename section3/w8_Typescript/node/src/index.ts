// const express = require('express')
// const path = require('path')
import express from 'express'
import path from 'path'

import router from './router/index'

const app = express();

app.use(express.static(path.join(__dirname,'../public')))

app.use('/api',router)

app.listen(2108,()=>{
    const msg:string = 'hello, server is running at port 2108';
    console.log(msg)
})


