const { ObjectId, Db } = require("mongodb")

// 封装formatDate函数，用以生产返回前端的数据格式
function formatData(obj={}){
    let {code=200,data=[],msg='success'} = obj
    if(code === 400 && msg === 'success'){
        msg = 'fail'
    }
    return {
        code,
        data,
        msg
    }
}

formatData.fail = function(){
    return formatData({code:400})
}
formatData.success = function(data){
    return formatData({data})
}


function formatId(id){
    // ['6037755f08f65d3a6c243510','6037755f08f65d3a6c243511','6037755f08f65d3a6c243512']
    // => [Object('6037755f08f65d3a6c243510'),ObjectId('6037755f08f65d3a6c243511'),ObjectId('6037755f08f65d3a6c243513')]
    // 如果传入的id为数组，则递归调用formatId
    if (Array.isArray(id)) {
        return id.map(item => {
            return formatId(item)
        })
    }
    // {$in:['6037755f08f65d3a6c243510','6037755f08f65d3a6c243511']}
    // => {$in:[Object('6037755f08f65d3a6c243510'),ObjectId('6037755f08f65d3a6c243511')]}
    if (typeof id === 'object' && id.$in !== undefined) {
        id.$in = formatId(id.$in);
        return id;
    }

    // '6037755f08f65d3a6c243510'
    // => ObjectId('6037755f08f65d3a6c243510')
    if (/^[a-fA-F0-9]{24}$/.test(id)) {
        return ObjectId(id)
    }

    return id;
}

// db.find('goods',{_id:'6037755f08f65d3a6c243510'})
// db.find('goods',{_id:['6037755f08f65d3a6c243510','6037755f08f65d3a6c243511','6037755f08f65d3a6c243512']})
// db.update('goods',{_id:{$in:['6037755f08f65d3a6c243510','6037755f08f65d3a6c243511']}})


function dataFilter(data,filter){
    return {

    }
}
// dataFilter(req.body,['goods_name','sales_price','img_url'])

module.exports = {
    formatData,
    formatId,
    dataFilter
}