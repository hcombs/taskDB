const mysql = require('mysql');
const { exec } = require('node:child_process');
const path = require('path');

const connection = (password) => {
    return mysql.createConnection({
        host:'localhost',
        user:'root',
        password:password,
        database:'tasks'
    });
}


const startUp = async (password) => {
    const script = path.join(__dirname,'../dbScripts/schema.sql');
    exec(`mysql -u root -p${password} < ${script}`);
};

module.exports ={connection, startUp};