const {Router} = require('express')

const router = Router()
module.exports = router

const db = require('../db')
const {formatData} = require('../utils')

// get /api/goods/list
router.get('/list',async (req,res)=>{
    let sql = `select * from goods`
    const data = await db(sql);
    res.send(
        formatData.success(data)
    )
})