const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dataRouter = require('./routes/data.router.js');
const PORT = process.env.PORT || 5000;
require('dotenv').config('../');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json());
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/data', dataRouter);

/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});