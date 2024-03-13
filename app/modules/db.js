const mysql = require('mysql');
const { exec } = require('node:child_process');
const path = require('path');

const procedures ={
    insertDayTask: 'call insertDayTask(?,?,?,?,?)',
    deleteDayTask:'call deleteDayTask(?)',
    updateDayTask:'call updateDayTask(?,?,?,?,?,?)',
    getDayTask:'call getDayTask(?,?,?)',
    getMonthTask:'call getMonthTask(?,?)'  
}

const connection = (password) => {
    return mysql.createConnection({
        host:'localhost',
        user:'root',
        password:password,
        database:'tasks'
    });
};


const startUp = async (password) => {
    const script = path.join(__dirname,'../dbScripts/schema.sql');
    exec(`mysql -u root -p${password} < ${script}`);
};

const executeProcedure = async (key, connection, params) => {
    return new Promise((resolve,reject)=>{
        connection.query(procedures[key],params,(err,res)=>{
            if(err){
                reject(err);
            } else {
                resolve(res);
            }
             
        })
    });
};

module.exports ={connection, startUp, executeProcedure};