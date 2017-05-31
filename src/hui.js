let express = require('express');
let app = express();
let path = require('path');
let ejs = require('ejs');
let renderdata = require('./renderdata.js');

app.get('/', huy);

app.get('/:name', jopa);

app.listen(8080, function () {
    console.log("Running!");
});



function jopa(req, res) {
    let filename = path.join(__dirname + '/..', '/assets', req.params.name);
    res.sendFile(filename, onerror);
}

function onerror(err) {
    if (err) {
        if (err.path == 'c:\\js\\pichost\\assets\\favicon.ico') { console.log('vsio okej'); }
        else { console.log(err);}
    }
}



function huy(req, res) {
    function onrenderfile(err, result) {
        // render on success
        if (!err) {
         //   console.log(result);
            res.send(result);
        }
        // render or error
        else {
            console.log(err);
        }
    }

    ejs.renderFile(path.join(__dirname + '/template', '/1.ejs'),
        {categories: renderdata.categories, pics: renderdata.pics }, onrenderfile);
    console.log("Got request!");
}