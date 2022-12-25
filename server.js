const express = require('express')
const app = express()
const PORT = process.env.PORT || 3030;
app.get('/',function(req,res){
    res.send('hello world');
})
app.get('/data',function(req,res){
    var data=[
        {id:17,name:'teddy'},
        {id:11,name:'charbel'},
        {id:17,name:'fawzy'},
    ]
    res.send('data');
})
app.listen(PORT)   