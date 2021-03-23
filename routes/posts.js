const express = require("express")
const router = express.Router();
const Post = require('../model/Post.js')

// router.get('/',async (req,res)=>{
//     try{
//         const post = await Post.find();
//         res.json(post);
//     } catch(err){
//         res.json({message:err})
//     }
// })

router.get('/', function (req, res) {
    let posts = Post.find({}, function(err, posts){
        if(err){
            console.log(err);
        }
        else {
            res.json(posts);
        }
    });
});
router.get('/specific',(req,res)=>{
    res.send('Specific')
})
module.exports = router;