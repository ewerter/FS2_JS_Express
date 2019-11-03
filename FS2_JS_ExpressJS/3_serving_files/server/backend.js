const express = require('express');
const appServer = express();
const port = 8080;
const path = require('path');


appServer.get('/', (req, res) =>{
  res.sendFile(path.join(__dirname+'/../client/index.html')) });

appServer.get('/index2.html', (req, res) =>{
  res.sendFile(path.join(__dirname+'/../client/index2.html')) });

appServer.get('/index3.html', (req, res) =>{
  res.sendFile(path.join(__dirname+'/../client/index3.html')) });

appServer.get('/index4.html', (req, res) =>{
  res.sendFile(path.join(__dirname+'/../client/index4.html')) });

  //console.log(__dirname)
  

var assetsPath = path.join(__dirname, '../server/static');
appServer.use(express.static(assetsPath));
console.log(assetsPath)


//appServer.use('/static', express.static(__dirname + '/../server'));
appServer.listen(port);
//appServer(port, () => console.log(`Ok on port ${port}`))