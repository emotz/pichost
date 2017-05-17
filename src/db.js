let nano = require('nano')('http://localhost:5984');

function usedb(huy){nano.use(huy);}
function jopa(err, body){if (!err) 
    console.log(body);
    else {console.log(err);}
}
//nano.db.create(huy,jopa);
let hui = nano.use('hui',jopa);
hui.get('9644b5deb34c04be06053779a6000c6f',jopa);
hui.list(function(err, body) {
  if (!err) {
    body.rows.forEach(function(doc) {
      console.log(doc);
    });
  }
});