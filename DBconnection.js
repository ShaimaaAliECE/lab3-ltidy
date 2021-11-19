const mysql = require('mysql');

// info for mysql that I made
function newConnection()
{
    let conn = mysql.createConnection({
        host:'34.122.175.18',
        user: 'root',
        password:'password',
        database:'usersDB'
    });
    return conn;
}
module.exports = newConnection;