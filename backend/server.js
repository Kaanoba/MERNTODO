const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require('./db/connect');
const todoRouter = require('./routes/todo');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
require('dotenv').config();

app.use('/api/todos', todoRouter);


const start = async () => {

    await db(process.env.DATABASE_URL);

    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    })

}

start();