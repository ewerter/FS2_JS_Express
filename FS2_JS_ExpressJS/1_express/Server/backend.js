const express = require('express')
const appServer = express()
const port = 8080
appServer.get('/', (req, res) =>{res.send('Hello World') })
appServer.listen(port)
//appServer(port, () => console.log(`Ok on port ${port}`))