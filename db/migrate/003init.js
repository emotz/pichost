var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('db/pichost.db');

db.serialize(function() {
  db.run(`CREATE TABLE \`categories\` (	\`id\`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,	\`name\`	varchar(255),	\`created_at\`	datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,	\`updated_at\`	datetime NOT NULL DEFAULT CURRENT_TIMESTAMP)`);
db.run(`CREATE TRIGGER [UpdateLastTimeCategories]
    AFTER UPDATE
    ON categories
    FOR EACH ROW
 BEGIN
    UPDATE categories SET updated_at=CURRENT_TIMESTAMP WHERE id=OLD.id;
END;`);


  /*var stmt = */db.run("INSERT INTO `categories` (`name`) VALUES ('jopa')");
  
  //stmt.finalize();

  db.each("SELECT rowid AS id, name FROM categories", function(err, row) {
      console.log(row.id + ": " + row.name);
  });
});

db.close();