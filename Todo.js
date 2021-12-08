import mongoose from 'mongoose';

const Todo = new mongoose.Schema({
    todoText: {type: String},
    todoChecker: {type: Boolean, default: false,}
});

export default mongoose.model('Todo', Todo);