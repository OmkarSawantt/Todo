import React, { useState } from 'react';
import { delTodo, toggleTodoCompleted, updateTodo } from '../actions/TodoAction';

function Todo({item,fetchTodo}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(item.title);
  const [editedDescription, setEditedDescription] = useState(item.description);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick =async () => {
    const body = {
      title: editedTitle,
      description: editedDescription
    };
    const res=await updateTodo(item._id,body)
    if (res.success) {
      fetchTodo()
    }
    setIsEditing(false);
  };

  const handleDeleteClick =async () => {
    const res=await delTodo(item._id);
    if (res.success) {
      fetchTodo()
    }
  };

  const handleCheckboxChange = async() => {
    const res=await toggleTodoCompleted(item._id);
    if (res.success) {
      fetchTodo()
    }
  };

  return (
    <div className='w-full flex gap-8 items-center justify-between'>
      <div className='mx-8 my-auto' >

        <div className="dark:bg-black/10">
        <label className="text-white">
          <input className="dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-5 h-5" checked={item.completed} onChange={handleCheckboxChange} type="checkbox"/>
        </label>
        </div>
      </div>

      <div className='w-full flex items-start flex-col overflow-auto ' >
        <div className='flex gap-2'>
          title:
          {isEditing ? (
           <input type="text" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)}/>
         ) : ( <p >{item.title}</p> )}
        </div>
        <div className='flex gap-2'>
          description:
          {isEditing ? (
            <input type="text" value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)}/>
          ) : (<p >{item.description}</p>)}
        </div>
      </div>
      <div className='flex gap-4 mx-8 self-end my-auto'>
        {isEditing ? (
          <button onClick={handleSaveClick}>Save</button>
        ) : (
          <button onClick={handleEditClick}>Edit</button>
        )}
        <button onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  );
}

export default Todo;
