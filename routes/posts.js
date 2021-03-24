const express = require("express")
const router = express.Router();
const Post = require('../model/Post.js')

router.get('/',async (req,res)=>{
    try{
        const post = await Post.find();
        res.json(post);
    } catch(err){
        res.json({message:err})
    }
})


router.get('/:key/:value', async(req,res)=>{
    try{    
        let key = req.params.key;
        let value = req.params.value;
        let query = {};
        query[key] = value;
        const data = await Post.find(query);
        res.json(data)
    }catch(err){
        res.json({message:err})
    }
})

// router.post('/',(req,res)=>{
//     const post = new Post({
//         year : req.body.year,
//         month : req.body.month,
//         state : req.body.state,
//         early_anc_register : req.body.early_anc_register,
//         anc_4_or_more : req.body.anc_4_or_more
//     });

//     post.save().then(data =>{
//         res.json(data);
//     })
// });


module.exports = router;