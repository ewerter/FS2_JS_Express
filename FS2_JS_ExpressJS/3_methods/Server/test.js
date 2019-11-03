try{
    const express = require('express');
    const appServer = express();
    const port = 3002;
    const url = require ('url');
    appServer(endpointPath, function (req, res) {

        res.send('Hello World')
        
        })
        
}
catch(err){
    console.log("error occured");
}