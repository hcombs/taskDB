const express = require('express');
const app = express();

const port = 4000;


app.listen(port,()=>{
    
});

app.use(express.static('public/public'));

const rootRoute = require('./router/router.js');
app.use('/',rootRoute);

