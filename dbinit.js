const mysql = require('mysql');

// info for mysql that I made
let conn = mysql.createConnection(
    {
        host: '34.122.175.18',
        user: 'root',
        password: 'password',
        database: 'usersDB'
    }
);

conn.connect();

//reset table if one is already there 
conn.query(`Drop Table Time`,
                (err,rows,fields) => {
                    if (err)
                        console.log(err);
                    else
                        console.log('Table Dropped');
                }
            )

conn.query(`Drop Table Users`,
            (err,rows,fields) => {
                if (err)
                    console.log(err);
                else
                    console.log('Table Dropped');
            }
        )

//conn.end();