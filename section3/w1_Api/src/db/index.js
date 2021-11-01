const {MongoClient,ObjectId} = require('mongodb');
const {formatId} = require('../utils')

const url = "mongodb://127.0.0.1:27017";
const dbname = 'h52108'

/**
 * 连接数据库
 * @returns {Object}    包含数据库对象与客户端对象组成的对象
 */
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

/**
 * 
 * @param {String} colname 集合名称
 * @param {Object|Array} data   插入的数据
 * @returns {code,ids,msg}
 */
async function create(colname,data){
    const {db,client} = await connect()
    const col = db.collection(colname)
    let result;

    // create方法返回值
    let res = {
        code:200,
        ids:[]
    }
    try{
        // insertMany()/insertOne()返回Promise对象
        if(Array.isArray(data)){
            // 返回格式
            // {
            //     acknowledged: true,
            //     insertedCount: 2,
            //     insertedIds: {
            //       '0': new ObjectId("617b5b81a8c19ee2353b137e"),
            //       '1': new ObjectId("617b5b81a8c19ee2353b137f")
            //     }
            //  }
            result = await col.insertMany(data)
            for(let key in result.insertedIds){
                res.ids.push(result.insertedIds[key])
            }
            
        }else{
            // 返回格式：
            // {
            //     acknowledged: true,
            //     insertedId: new ObjectId("617b5b3b824a8353dafac872")
            // }
            result = await col.insertOne(data)
            res.ids = [result.insertedId]
        }

    }catch(err){
        res.code = 400
        res.msg = err;
    }
    client.close()
    return res
}

// create('user',{username:'laoxie',password:123456})
// create('user',[{username:'laoxie3',password:123456},{username:'laoxie4',password:123456}]).then(res=>{
//     console.log('res',res)
// })

async function remove(colname,query={}){
    const {db,client} = await connect()
    const col = db.collection(colname)

    if(query._id){
        query._id = ObjectId(query._id)
    }

    let res;
    try{
        await col.deleteMany(query)
        res = true;
    }catch(err){
        res = false;
    }
    return res;
}

async function update(colname,query={},data={}){
    const {db,client} = await connect()
    const col = db.collection(colname)

    if(query._id){
        query._id = ObjectId(query._id)
    }

    let res;
    try{
        await col.updateMany(query,data)
        res = true;
    }catch(err){
        res = false;
    }
    return res;

}
// update('user',{role:'vip'},{$set:{role:'svip'},$inc:{age:1}})

/**
 * 查询数据库
 * @param {String}      colname     集合名称
 * @param {Object}      query       查询条件
 * @returns {Array}                 查询结果
 */
async function find(colname,query={},{sort,skip,limit,projection}={}){
    const {db,client} = await connect()
    const col = db.collection(colname)

    console.log('query1',query)
    // {_id:'6037755f08f65d3a6c243510'}
    // {_id:['6037755f08f65d3a6c243510','6037755f08f65d3a6c243511','6037755f08f65d3a6c243512']}
    if(query._id){
        // query._id = ObjectId(query._id)
        query._id = formatId(query._id)
    }
    console.log('query2=',query)

    let result = col.find(query,{
        projection
    })

    // 排序
    if(sort){
        // sort='price'
        // sort='price,1'
        let [key,type=-1] = sort.split(',')

        result = result.sort({
            [key]:type
        })
    }

    // 跳过数量
    if(skip){
        result = result.skip(skip)
    }

    // 限制数量
    if(limit){
        result = result.limit(limit)
    }

    

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