let path = require('path');
let resizepics = require('./resizepics.js');
var fs = require('fs'), gm = require('gm').subClass({ imageMagick: true });


let currentdir = path.join(__dirname + '/..', '/assets');
let pics = [['m1.jpg', 'm2.jpg', 'm3.jpg'], ['m4.jpg', 'm5.jpg', 'm6.jpg'], ['m7.jpg', 'm8.jpg', 'm9.jpg'], ['m10.jpg', 'm11.jpg', 'm12.jpg'], ['m13.jpg']];
let categories = ['telki', 'golubi', 'jopa', 'lalala', 'top'];
let picture = ['3.jpg'];
let alldata = rowgrp(buildrenderdata());
//let postrenderdata = buildpostrenderdata(currentdir,id);
//console.log(pics);
//console.log(picture);



// >buildrenderdata().length
// 13
function buildrenderdata() {
    let res = [];
    let alldirectoryfiles = fs.readdirSync(currentdir);
    let filteredfiles = resizepics.files2resize(alldirectoryfiles);
    for (let file of filteredfiles) {
        let fileid = resizepics.filename(file);
        let fullsize = file;
        let mini = 'm' + file;
        res.push({ "id": fileid, "fullsize": fullsize, "mini": mini });
    }
    return res;
}

function buildpostrenderdata(id) {
    res = {};
    let alldirectoryfiles = fs.readdirSync(currentdir);
    let filteredfiles = resizepics.files2resize(alldirectoryfiles);
    for (let file of filteredfiles) {
        let fileid = resizepics.filename(file);
        let fullsize = file;
        let mini = 'm' + file;
        if (fileid == id) { res = ({ "id": fileid, "fullsize": fullsize, "mini": mini }); }
    }
    return res;
}


// >rowgrp(buildrenderdata()).length
// 5
function rowgrp(arr) {
    res = [];
    for (let i = 0; i < arr.length;) {
        let n = 0;
        let row = [];
        do {
            if (arr[i] === undefined) { break; }
            row.push(arr[i]);
            n++;
            i++;
        } while (n < 3);
        res.push(row);
    }
    return res;
}

console.log(rowgrp(buildrenderdata()));




module.exports = {
    pics: pics,
    categories: categories,
    picture: picture,
    alldata: alldata,
    postrenderdata: buildpostrenderdata
};