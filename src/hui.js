let express = require('express');
let app = express();
let path = require('path');


app.get('/', huy);


app.get('/:name', function (req, res) {
    res.sendFile(path.join(__dirname + '/..', '/assets', req.params.name), function (err) {
        if (err) {  console.log("err");
        }
    });
});



app.listen(8080, function () {
    console.log("Running!");
});



function huy(req, res) {
    console.log("Got request!");
    console.log(req);
    res.sendFile(path.join(__dirname + '/..', '/assets', '/3.html'), function (err) {
        if (err) { console.log('err');
        }
    });
}
