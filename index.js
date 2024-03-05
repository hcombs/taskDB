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