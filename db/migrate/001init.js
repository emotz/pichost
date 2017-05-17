var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('db/pichost.db');

db.serialize(function() {
  db.run(`CREATE TABLE \`posts\` (	\`id\`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,	\`title\`	varchar(255),	\`comment\`	text,	\`created_at\`	datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,	\`updated_at\`	datetime NOT NULL DEFAULT CURRENT_TIMESTAMP)`);
db.run(`CREATE TRIGGER [UpdateLastTime]
    AFTER UPDATE
    ON posts
    FOR EACH ROW
 BEGIN
    UPDATE posts SET updated_at=CURRENT_TIMESTAMP WHERE id=OLD.id;
END;`);


  /*var stmt = */db.run("INSERT INTO `posts` (`title`,`comment`) VALUES ('vovan','ueban')");
  
  //stmt.finalize();

  db.each("SELECT rowid AS id, title FROM posts", function(err, row) {
      console.log(row.id + ": " + row.title);
  });
});

db.close();