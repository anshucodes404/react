import { useContext, createContext } from "react";

export const todoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false
        }
    ],
    editTodo: (todo, id) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
    addTodo: (todo) => {}
})

export const useTodo = () => {
    return useContext(todoContext)
}

export const TodoProvider = todoContext.Provider