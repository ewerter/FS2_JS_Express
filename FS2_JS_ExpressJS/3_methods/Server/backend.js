const express = require('express');
const appServer = express();
const appServer2 = express();
const appServer3 = express();
const port = 8080;
const port2 = 3333;
const port3 = 7000;

appServer.get('/', (req, res) =>{res.send('Hello World') })
appServer.listen(port);

appServer2.get('/', (req, res) =>{res.send('Hello World2') })
appServer2.listen(port2);

appServer3.get('/', (req, res) =>{res.send('Hello World3') })
appServer3.listen(port3);
