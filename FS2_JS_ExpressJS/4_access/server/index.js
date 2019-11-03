const express = require('express')
const appServer = express()
const bodyParser= require('body-parser')
const port = 80
appServer.use(bodyParser.urlencoded({ extended: false}))
appServer.use(bodyParser.json())
appServer.get('/', (req, res) => res.send('Hello World'))
appServer.post('/authorizeUser', (req,res)=>{
    let {user}= req.body
    if(user == "1"){
        res.json({
            result: 'admin',
            message: 'Hello Admin'
        })
    }
    else {
        res.json({
            result: 'user',
            message: 'Hello User'
        })
    }
})
appServer.listen(port, () => console.log(`Ok on port ${port}`))
appServer.use(express.static('../client'))