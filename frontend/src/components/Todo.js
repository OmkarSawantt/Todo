
import React, { useState } from 'react'

function Todo ({title,description})  {

  return (
    <div>
    <ul>
    <li>title:{title}</li>
    <li>description:{description}</li>
    </ul>
    <button>Edit</button>
    <button>Delete</button>
    </div>
  )
}
export default Todo;
