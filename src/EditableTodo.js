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
  const [ isEditing, setIsEditing ] = useState(false);
  /** Toggle if this is being edited */
  function toggleEdit() {
    isEditing ? setIsEditing(false) : setIsEditing(true);
  }

  /** Call remove fn passed to this. */
  function handleDelete(id) {
    removeTodo(id);
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(todo) {
    toggleEdit();
    updateTodo(todo);
  }

  const initialFormData = {
    title: todo.title,
    description: todo.description,
    priority: todo.priority
  }

  console.log(initialFormData);
  
  return ( isEditing ? (
      <div className="EditableTodo">
        <TodoForm initialFormData={initialFormData}
        handleSave={handleSave} 
        />
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
                onClick={() => handleDelete(todo.id)}>
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
