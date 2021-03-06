const { ObjectId} = require("mongodb")
const crypto = require('crypto')
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


/**
 * 
 * @param {Object} data 
 * @param {Array} filter 
 * @returns {Object}    
 */
function dataFilter(data,filter){
    let res = {}
    filter.forEach(item=>{
        let key = item
        let value = data[key];
        
        if(typeof item === 'object'){
            key = item.key;
            value = data[key]; 
            // 如果value得到undefined且item.default有值
            if(value === undefined && item.default !== undefined){
                value = item.default;
            }else{
                switch(item.type){
                    case 'number':
                        value = Number(value);
                        break;
                    case 'boolean':
                        value = ['false','0'].includes(value) ? false : true;
                        break;
                }

            }
        }
        
        if(value !== undefined){
            res[key] = value;
        }
        
    })
    return res;
}
// dataFilter(req.body,['goods_name','sales_price','img_url','price','inventory'])
// dataFilter(req.query,[{key:'page',type:'number'},'size',{key:'asc',type:'boolean'}])
// ?asc=false&page=1&sie=10

/**
 * 
 * @param {String} str 待加密的数据
 * @param {String} sf 算法
 * @param {String} out 输出密文格式
 * @returns {Sring} 密文
 */
function jiamiPassword(str,sf='sha256',out='hex'){
    // 加密
    // 1.以md5加密算法创建一个hash对象
    const hash = crypto.createHash(sf)
    // 2.加密数据
    hash.update(str)
    // 3.输出密文（hex,base64,Buffer）
    const res = hash.digest(out)

    return res

}

module.exports = {
    formatData,
    formatId,
    dataFilter,
    jiamiPassword
}