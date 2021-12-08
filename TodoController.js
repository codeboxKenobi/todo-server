import Todo from './Todo.js'



class TodoController {
    async create(req, res) {
        try {
            const {
                todoText,
                todoChecker
            } = req.body
            const todo = await Todo.create({
                todoText,
                todoChecker
            });
            res.json(todo)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAllTodo(req, res) {
        try {
            const todo = await Todo.find();
            return res.json(todo);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async updateTodo(req, res) {
        try {
            const {id: _id} = req.params
            const {todoChecker} = req.body
            const newTodo = {
                _id,
                todoChecker
              }
            Todo.findByIdAndUpdate(
                _id,
                newTodo,
                (err, updatedTodo) => {
                  if (err) {
                    res.json({
                      newTodo,
                      success: false,
                      msg: 'Failed to update todo'
                    })
                  } else {
                    res.json({newTodo, success: true, todoChecker})
                  }
                })
        } catch (e) {
            res.status(500).json(e);
        }
    }
    
    async deleteTodo(req, res) {
        try {
            const {id} = req.params
            console.log(id);
            const todo = await Todo.findByIdAndDelete(id)
            return res.json(todo)
        } catch (e) {
            res.status(500).json(e)
        }
    }

}

export default new TodoController()