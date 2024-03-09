const express = require('express');
const app = express();
const db = require('./modules/db');

const port = 4000;

const dbpass = process.argv[2];
db.startUp(dbpass);
const pool = db.connection(dbpass);

app.use(express.json());
app.listen(port,()=>{});

app.post('/', async(req,res)=>{
    await db.executeProcedure(req.body.key, pool, req.body.params).then((result)=>{
        res.send(result);
    });
});