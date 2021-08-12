import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

/** Show editable todo item.
 *
 * Props
 * - todo
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({ todo, updateTodo, removeTodo }) {
  const [ isEditable, setIsEditable ] = useState(false);
  /** Toggle if this is being edited */
  function toggleEdit() {
    isEditable ? setIsEditable(false) : setIsEditable(true);
  }

  /** Call remove fn passed to this. */
  function handleDelete(todo, removeTodo) {
    removeTodo(todo.id);
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) {

  }
  
  return ( isEditable ? (
      <div className="EditableTodo">
        <TodoForm initialFormData={todo}/>
      </div>
    ) : (
      <div className="EditableTodo">
        <div className="mb-3">
          <div className="float-right text-sm-right">
            <button
                className="EditableTodo-toggle btn-link btn btn-sm"
                onClick={() => toggleEdit()}>
              Edit
            </button>
            <button
                className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
                onClick={() => handleDelete()}>
              Del
            </button>
          </div>
          <Todo 
            id={todo.id}
            title={todo.title}
            description={todo.description}
            priority={todo.priority}/>
        </div>
      </div>
      )
  )
}

export default EditableTodo;
