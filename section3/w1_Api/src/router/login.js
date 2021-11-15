const {Router} = require('express')

const router = Router();
module.exports = router;

const crypto = require('crypto')
const db = require('../db')
const {formatData}  = require('../utils')
const token = require('../utils/token')

// get /api/login
router.get('/',async (req,res)=>{
    const {username,password} = req.query;

    // 1.以md5加密算法创建一个hash对象
    const hash = crypto.createHash('sha256'); // 加盐：crypto.createHmac('sha256','abc')

    // 2.加密数据
    hash.update(password)
    // 3.输出密文（hex,base64,Buffer）
    const password2 = hash.digest('hex')

    let result;
    try {
        // 第一次登录：需要用户名和密码确认用户身份
        let data = await db.find('user', { username, password:password2 });
        data = data[0];
        // 如果查询到数据，则确认用户身份
        if (data) {
            // 确认用户身份后，创建token
            let authorization = token.create({ username })
            data.authorization = authorization;
            result = formatData({ data })
        } else {
            result = formatData({ code: 401, msg: '用户名或密码错误' })
        }
    } catch (err) {
        result = formatData({ code: 400, msg: err })
    }
    res.send(result);
})
