const express = require('express')
const router = express.Router();
module.exports = router;

const userRouter = require('./user')
const goodsRouter = require('./goods')

// /api/user
router.use('/user',userRouter)
router.use('/goods',goodsRouter)
router.use('/reg',regRouter)
router.use('/login',loginRouter)