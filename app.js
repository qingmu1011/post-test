const express = require('express')

const app = express()

app.post('/test',(req,res)=>{
    res.send({
        code: 200,
        msg: '请求成功'
    })
})

app.listen(23889, ()=>{
    console.log('已启动')
})