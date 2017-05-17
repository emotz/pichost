var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('db/pichost.db');

db.serialize(function() {
  db.run(`CREATE TABLE \`categories_posts\` (	\`category_id\`	INTEGER,	\`post_id\`	INTEGER)`);


  /*var stmt = */db.run("INSERT INTO `categories_posts` (`category_id`,`post_id`) VALUES ('1','2')");
  
  //stmt.finalize();

  db.each("SELECT rowid AS category_id, post_id FROM categories_posts", function(err, row) {
      console.log(row.category_id + ": " + row.post_id);
  });
});

db.close();