var fs = require('fs'), gm = require('gm').subClass({ imageMagick: true });
let path = require('path');



function totalresize(dir){
    let alldirectoryfiles = fs.readdirSync(currentdir);
    let filteredfiles = files2resize(alldirectoryfiles);
    for (let file of filteredfiles){
        resizefile(file,dir);
    }
}

function resizefile(file,dir){
gm(path.join(dir,file))
.resize(205, 205)
.write(path.join(dir,(mfilename(file))), function (err) {
  if (!err) console.log('done');
});
}

function mfilename(file){
    let res = 'm' + file;
    return res;
    }
// > files2resize("[asdasd.jpg, asdasdwe.png, 1.html, 2.jpg, 6.png]")
// '[2.jpg, 6.png]'

function files2resize(arr) {
    let res = [];
    for (let file of arr) {
        let tmp = file;
        if (numcheck(filename(file)) && (filerazreshenie(file) == 'jpg' || filerazreshenie(file) == 'jpeg' || filerazreshenie(file) == 'png')) {
            res.push(tmp);
        }
        else {res= res;}
    }
    return res;
}

function numcheck(str) {
    let res = +str;
    res = res.toString();
    return (res === str);
}


// > filename("test.jpg")
// 'test'

function filename(str) {
    let res = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== '.') { res = res + str[i]; }
        else break;
    }
    return res;
}
// > filerazreshenie("test.jpg")
// 'jpg'


function filerazreshenie(str) {
    let res = '';
    for (let i = str.length - 1; i > 0; i--) {
        if (str[i] !== '.') { res = res + str[i]; }
        else break;
    }
    return reverse(res);
}

function reverse(s) {
    return s.split("").reverse().join("");
}

let currentdir = path.join(__dirname + '/..', '/assets');
let res = fs.readdirSync(currentdir);
//console.log(res);
//console.log(files2resize(res));
//console.log(mfilename('jopa.adasd'));
//console.log(currentdir);
//totalresize(currentdir);

function buildrenderdata(dir) {
    let res = [];
     let alldirectoryfiles = fs.readdirSync(currentdir);
    let filteredfiles = files2resize(alldirectoryfiles);
    for (let file of filteredfiles){
        let fileid = filename(file);
        let fullsize = file;
        let mini = 'm'+ file;
        res.push({"id" : fileid, "fullsize" : fullsize, "mini" : mini });
    }
    return res;
}
//console.log(buildrenderdata(currentdir));


module.exports = {
    files2resize : files2resize,
    filename : filename,
    
};