const { Router } = require('express')

const router = Router();
module.exports = router;

const db = require('../db')
const { formatData, dataFilter, jiamiPassword } = require('../utils')
const token = require('../utils/token')

const colName = 'user'

// get /api/user/list
router.get('/list', async (req, res) => {
    // const {page=1,size=10,ids} = req.query;
    const params = dataFilter(
        req.query,
        [{ key: 'page', type: 'number', default: 1 }, { key: 'size', type: 'number' }, 'ids', { key: 'asc', type: 'boolean' }]
    )
    const { page = 1, size = 10, ids } = params;
    const skip = (page - 1) * size
    const limit = size;

    console.log('query->params=', req.query, params);

    let query = {}

    if (ids) {
        query._id = { $in: ids }
    }

    const data = await db.find(colName, query, { skip, limit })
    res.send(formatData.success(data))

})

// 添加用户
router.post('/add', async function (req, res) {
    const { username, password } = dataFilter(req.body, ['username', 'password'])

    const result = await db.create(colName, {
        username,
        password: jiamiPassword(password),
        addtime: new Date()
    })

    res.send(formatData({
        code: result.code
    }))
})

// 校验用户token: /api/user/verify
router.get('/verify', async function (req, res) {
    const Authorization = req.get('Authorization')

    const result = token.verify(Authorization)
    
    res.send(formatData({
        code: result ? 200 : 400
    }))
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const data = await db.find(colName, { _id: id })
    res.send(formatData.success(data[0]))
})
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const newData = dataFilter(req.body, ['username', 'password', 'age', 'role'])
    const result = await db.update(colName, { _id: id }, { $set: newData })
    res.send(formatData({
        code: result ? 200 : 400
    }))
})
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const result = await db.remove(colName,{_id:id})
    res.send(formatData({
        code: result ? 200 : 400
    }))
})