import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todoSlice/todoSlice";

function Todos() {

   const todos = useSelector(state => state.todos)
   const dispatch = useDispatch()



  return (
    <>
      <h2>Your Todos</h2>
      {
        todos.map((todo) => (
          //make your own UI
              <li key={todo.id}>
                <div className="text-white" >{todo.text}</div>
                <button
                 onClick={() => dispatch(removeTodo(todo.id))}
                >❌</button>
              </li>
        ))
      }
    </>
  )
}

export default Todos
