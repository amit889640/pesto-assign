const mongoose = require('mongoose');

const configDb = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/todos').then(() => console.log('Connected!'));
}

module.exports = { configDb }