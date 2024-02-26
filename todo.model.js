
const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    name: String,
    desc: String,
    status: String,
    updated: { type: Date, default: Date.now }
});

const todoModel = mongoose.model('todo', todoSchema);


async function save(todoObj) {
    const saveTodo = new todoModel(todoObj);
    await saveTodo.save();
}

async function getTodos(todoObj) {
    return await todoModel.find({});
}


module.exports = { save, getTodos }