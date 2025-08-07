import {createContext, useContext} from "react"

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: " Todo msg",//same1
            completed: false,
        }
    ],
    addTodo: (todo) => {}, //(todo msg is passed from line 7) same1
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

// jab bhi use context denge uske andar ek context dena pdega , ki kis context ke baare me baat kr rhe hai
export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider