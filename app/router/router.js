const express = require('express');
const router = express.Router();
const db = require('../modules/db');
const path = require('path');

db.startUp();
const pool = db.connection();

router.use(express.json());

router.get('/',(req,res)=>{
    res.sendFile(process.env.PWD+'/public/public/activityMaker.html');
});

router.get('/task/:month/:day/:year', async (req,res)=>{
    await dbOperation(formatParams(req),res);    
});

router.post('/', async(req,res)=>{
    await dbOperation(req,res);
});


const formatParams = (req) => {
    const keyVal = req.params.day > 0 ? 'getDayTask' : 'getMonthTask';
    const paramVal = req.params.day > 0 ? [req.params.month, req.params.day, req.params.year] : [req.params.month, req.params.year];
    return {
            body: {
                key:keyVal,
                params:paramVal
            }
    }
};

const dbOperation = async (req,res) => {
    await db.executeProcedure(req.body.key, pool, req.body.params).catch((e)=>res.send({error:e.toString()})).then((result)=>{
        res.send(result);
    });
};

module.exports = router;