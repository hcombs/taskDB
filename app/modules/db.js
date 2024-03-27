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

const connection = () => {
    return mysql.createConnection({
        HOST: process.env.DB_HOST,
        USER: process.env.DB_USER,
        PASSWORD: process.env.DB_PASSWORD,
        DB:process.env.DB_NAME,
        port: process.env.DB_PORT
    });
};


const startUp = async () => {
    const script = path.join(__dirname,'../dbScripts/schema.sql');
    exec(`mysql -u root -p${process.env.DB_PASSWORD} -h ${process.env.DB_HOST}:${process.env.DB_PORT}< ${script}`);
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