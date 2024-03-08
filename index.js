const express = require('express');
const app = express();
const db = require('./modules/db');

const port = 4000;

const dbpass = process.argv[2];
db.startUp(dbpass);
const pool = db.connection(dbpass);

app.use(express.json());
app.listen(port,()=>{});

app.get('/', async (req,res)=>{
    res.send('');
});
//todo
app.get('/monthTask',(req,res)=>{
    db.executeProcedure('getMonthTask',pool,[]);
});
//todo
app.get('/dayTask',(req,res)=>{
    db.executeProcedure('getDayTask',pool,[]);
});

app.post('/newTask',(req,res)=>{
    db.executeProcedure('insertDayTask',pool,req.body);
    res.send({});
});

app.post('/updateTask',(req,res)=>{
    db.executeProcedure('updateDayTask',pool,req.body);
});

app.post('/deleteTask',(req,res)=>{
    db.executeProcedure('deleteDayTask',pool,req.body);
});