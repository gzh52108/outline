const {Router} = require('express')

const router = Router();
module.exports = router;

const db = require('../db')
const {formatData} = require('../utils')

// get /api/user/list
router.get('/list',async (req,res)=>{
    const {page=1,size=10,ids} = req.query;
    const skip = (page-1)*size
    const limit = size*1;

    console.log('ids=',typeof ids,ids);

    let query = {}

    if(ids){
        query._id = {$in:ids}
    }

    const data = await db.find('user',query,{skip,limit})
    res.send(formatData.success(data))
   
})
router.post('/add',async function(req,res){

})

router.get('/:id',async (req,res)=>{
    
})
router.put('/:id',async (req,res)=>{
    
})
router.delete('/:id',async (req,res)=>{
    
})