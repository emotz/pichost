var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('db/pichost.db');

db.serialize(function() {
  db.run(`CREATE TABLE \`accounts\` (	\`id\`	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,	\`username\` varchar(30),    \`group\` INTEGER,	\`comment\`	text,	\`created_at\`	datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,	\`updated_at\`	datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`password\` varchar(255))`);
db.run(`CREATE TRIGGER [UpdateLastTimeAccounts]
    AFTER UPDATE
    ON accounts
    FOR EACH ROW
 BEGIN
    UPDATE accounts SET updated_at=CURRENT_TIMESTAMP WHERE id=OLD.id;
END;`);


  /*var stmt = */db.run("INSERT INTO `accounts` (`username`,`group`) VALUES ('jopa','3')");
  
  //stmt.finalize();

  db.each("SELECT rowid AS id, username FROM accounts", function(err, row) {
      console.log(row.id + ": " + row.username);
  });
});

db.close();