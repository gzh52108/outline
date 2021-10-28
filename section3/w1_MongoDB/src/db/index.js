const {MongoClient} = require('mongodb');
const router = require('../../../w1_NodeJS/server/router/upload');

const url = "mongodb://127.0.0.1:27017";
const dbname = 'h52108'

async function connect(){
    // 创建客户端对象
    const client = new MongoClient(url);
    
    await client.connect()

    // 切换数据库
    const db = client.db(dbname)

    return {
        db,
        client
    }
}

async function create(){
    const {db,client} = await connect()
}

async function remove(){
    const {db,client} = await connect()

}

async function update(){
    const {db,client} = await connect()

}

async function find(colname,query){
    const {db,client} = await connect()
    const col = db.collection(colname)
    const result = col.find(query)

    const data = await result.toArray()

    // 关闭连接，释放资源占用
    client.close();
    return data;
}

module.exports = {
    create,
    remove,
    update,
    find,
}

// 使用
// const {connect} = require('./db')
// get /api/user/list
// router.get('/list',async function(req,res){
//     const {db,client} = await connect()
//     const col = db.collection('user')
//     const data = await col.find().toAarry()
//     client.close()
//     res.send(formatData.success(data))

// })
// router.get('/:id',async function(req,res){
//     const {id} = req.params;
//     const {db,client} = await connect()
//     const col = db.collection('user')
//     const data = await col.find({_id:id}).toAarry()
//     client.close()
//     res.send(formatData.success(data))
// })

// const mongo = require('./db')
// router.get('/list',async function(req,res){
//     const data = await mongo.find('user',{role:'vip'})
//     res.send(formatData.success(data))
// })
// router.get('/list',async function(req,res){
//     const data = await mongo.find('goods')
//     res.send(formatData.success(data))
// })