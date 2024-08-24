
const todoModel = require('../Models/todos')

const update = (req, res) => {
    let { id } = req.params.id;
    // console.log(req.body);
    console.log(id);
    let { title } = req.body;
    let todos = JSON.parse(fs.readFileSync("./todos.json", "utf8"));
    let todo = todos.find((todo) => todo.id == id)
    if (todo) {
        todo.title = title;
        fs.writeFileSync("./todos.json", JSON.stringify(todos));
        res.json({ message: "Edited ", data: todo })
    } else {
        res.json({ message: "SORRY there is no todo Found with this id" })
    }
}

const create = async (req, res) => {
    let newTodo = req.body;
    try {
        let insert = await todoModel.create(newTodo);
        res.status(201).json({ message: 'created', data: insert })

    } catch (error) {
        res.status(400).json({ message: error.message })
    }


}

const getAllTodos = (req, res) => {


    let todos = JSON.parse(fs.readFileSync("./todos.json", "utf8"));
    res.send(todos);
}

const getById = (req, res) => {
    let id = req.params.id;
    let todos = JSON.parse(fs.readFileSync("./todos.json", "utf8"));
    for (let i = 0; i < todos.length; i++) {
        let element = todos[i];
        if (element.id == id) {
            res.send(element)
        }
    }
}

const deletById = (req, res) => {
    let id = req.params.id
    let todos = JSON.parse(fs.readFileSync("./todos.json", "utf8"));
    let todo = todos.find((todo) => todo.id == id);
    if (todo) {
        todos.splice(todo, 1);
        fs.writeFileSync("./todos.json", JSON.stringify(todos));
        res.json({ message: "deleted successfully ", data: todos })
    } else {
        res.json({ message: "not found ", data: todos })
    }
}

const updateById = async (req, res) => {
    let {id} = req.params
    
    try {
        let updateOne = await todoModel.findById(id)
        console.log(updateOne);
        
        updateOne.create()
        
        res.status(201).json({message:'updated',data:newTodo})
    } catch (error) {
        res.status(400).json({message:error.message})
        
    }

    // if (todo) {
    //     todo.title = title;
    //     fs.writeFileSync("./todos.json", JSON.stringify(todos));
    //     res.json({ message: "Edited ", data: todo })
    // } else {
    //     res.json({ message: "SORRY there is no todo Found with this id" })
    // }
}

module.exports = { update, updateById, create, deletById, getById, getAllTodos }
