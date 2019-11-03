const express = require('express')
const appServer = express()
const port = 8080
appServer('/', (req, res) => res.send('Hello World'))
appServer(port, () => console.log(`Ok on port ${port}`))