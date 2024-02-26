const express = require('express')
const app = express();
const { save, getTodos } = require('./todo.model');
const { configDb } = require('./config');
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
configDb();

app.post('/api', async (req, res) => {
    try {
        const result = await save(req.body);
        return res.status(200).send({ status: true, message: `Todo has been saved ${req.body}` })
    } catch (error) {
        return res.status(500).send({ status: false, message: `Something went wrong error: ${error}`, });
    }
})

app.get('/api', async (req, res) => {
    try {
        const result = await getTodos();
        return res.status(200).send({ status: true, message: `success`, data: result })
    } catch (error) {
        return res.status(500).send({ status: false, message: `Something went wrong error: ${error}`, });
    }
})

app.listen(3000, () => {
    console.log('server starts');
})