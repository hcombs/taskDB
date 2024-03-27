const mysql = require('mysql');
const { exec } = require('node:child_process');
const path = require('path');

const procedures ={
    insertDayTask: 'call insertDayTask(?,?,?,?,?)',
    deleteDayTask:'call deleteDayTask(?)',
    updateDayTask:'call updateDayTask(?,?,?,?,?,?)',
    getDayTask:'call getDayTask(?,?,?)',
    getMonthTask:'call getMonthTask(?,?)'  
};

const connection = () => {
    return mysql.createPool({
        connectionLimit: 10,
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database:process.env.MYSQL_DATABASE
    });
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

module.exports ={connection, executeProcedure};