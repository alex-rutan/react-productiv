import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import TodoForm from "./TodoForm";
import EditableTodoList from "./EditableTodoList";

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({ initialTodos }) {
  const [ todos, setTodos ] = useState(initialTodos);

  /** add a new todo to list */
  function create(todo) {
    let newTodo = { ...todo, id:uuid() };
    setTodos( todos => [...todos, newTodo] );
  }
  

  /** update a todo with updatedTodo */
  function update(updatedTodo) {
    setTodos(todos => {
      let updateTodoIdx = todos.findIndex(ele => ele.id === updatedTodo.id);
      let todosCopy = [...todos];
      todosCopy[updateTodoIdx] = updatedTodo;
      return todosCopy;
    });
  }

  /** delete a todo by id */
  function remove(id) {
    setTodos(todos => todos.filter(ele => ele.id !== id));
  }

  return (
      <main className="TodoApp">
        <div className="row">

          <div className="col-md-6">
            {todos.length > 0 ?
              <EditableTodoList 
                todos={todos}
                update={update}
                remove={remove}
              /> 
              :
              <span className="text-muted">You have no todos.</span>
            }
          </div>

          <div className="col-md-6">
            {todos.length > 0 ?
            <section className="mb-4">
              <h3>Top Todo</h3>
              <TopTodo todos={todos}/>
            </section>
              :
              ""
            }
            <section>
              <h3 className="mb-3">Add Nü Todo</h3>
              <TodoForm handleSave={create}/>
            </section>
          </div>

        </div>
      </main>
  );
}

export default TodoApp;