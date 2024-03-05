const express = require('express');
const app = express();
const db = require('./modules/db');

const port = 4000;

const dbpass = process.argv[2];
db.startUp(dbpass);
const pool = db.connection(dbpass);

app.listen(port,()=>{});

app.get('/', async (req,res)=>{
    res.send('');
});

app.get('/monthTask',(req,res)=>{
    db.executeProcedure('getMonthTask',pool,[]);
});

app.get('/dayTask',(req,res)=>{
    db.executeProcedure('getDayTask',pool,[]);
});

app.post('/newTask',(req,res)=>{
    db.executeProcedure('insertDayTask',pool,['test from server',false,2024,3,5]);
});

app.post('/updateTask',(req,res)=>{
    db.executeProcedure('updateDayTask',pool,[3,'test from server 2',false,2024,3,5]);
});

app.post('/deleteTask',(req,res)=>{
    db.executeProcedure('deleteDayTask',pool,3);
});