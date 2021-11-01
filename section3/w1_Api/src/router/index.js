const {Router,json,urlencoded} = require('express');

const router = Router();
module.exports = router;

const userRouter = require('./user')
const goodsRouter = require('./goods')
const regRouter = require('./reg')
const loginRouter = require('./login')

const cors = require('../filter/cors')

// 跨域解决方案：CORS
router.use(cors)

// 处理请求体数据
router.use(
    urlencoded({extended:false}), // name=value&name=value, qs,querystring
    json(),
)

// /api/user
router.use('/user',userRouter);
router.use('/goods',goodsRouter);
router.use('/reg',regRouter);
router.use('/login',loginRouter);
