import keys from './keys';
import mysql from 'mysql';
//import mysql from 'promise-mysql';

const pool = mysql.createPool(keys.database);

pool.getConnection( (err, conn) => {
    conn.query('SELECT * FROM operation');
    conn.release();
    console.log("Database is connected");
})

export default pool;

