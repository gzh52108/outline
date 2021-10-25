const {Router} = require('express')

const router = Router();
module.exports = router;

const db = require('../db')
const {formatData} = require('../utils')

// get /api/user/list
router.get('/list',async (req,res)=>{
    // req: request
    // res: response
    let sql = `select * from user`;

    const data = await db(sql);

    // res.send(formatData({data}))
    res.send(formatData.success(data))
})
router.put('/:id',async (req,res)=>{
    const {id} = req.params;
    const {password} = req.body;
    let sql = `update user set password='${password}' where id=${id}`;

    const data = await db(sql);

    // res.send(formatData({data}))
    res.send(formatData.success())
})