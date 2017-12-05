const pg = require('pg');
const uri = 'postgres://yybfuqrz:vOxN9ub8Q5KMgc7RzAVRDl5LwNmolvaF@baasu.db.elephantsql.com:5432/yybfuqrz';
const db = {};

pg.connect(uri, (err, client, done) => {
  if (err)  {
    console.log('Error connecting to database.');
    throw new Error(err);
  }
  db.conn = client;
  console.log('Connected to database..');
});

module.exports = db;
