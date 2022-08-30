import React, { useContext, useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { TodoContext } from '../context';

const TodoStateText = ({ state = "RUNNING", name, setIsEditing }) => {

  if(state === "RUNNING") {
    return <p onDoubleClick={ () => setIsEditing(true) } className='text-sky-800 cursor-text ml-3'>{name}</p>
  }

  return <del onDoubleClick={ () => setIsEditing(true) } className='text-sky-800 cursor-text ml-3'>{name}</del>
}


export const Todo = ({ name, state, id, remove, className = "", index, ...rest }) => {
  const { dispatch } = useContext(TodoContext)
  const [isEditing, setIsEditing] = useState(false);
  const [ currentTodo, setCurrentTodo ] = useState(name)
  
  const onSubmit = (form) => {
    form.preventDefault();
    dispatch({
      type: "TODO/UPDATE",
      payload: {
        name: currentTodo,
        id: id
      }
    })

    setIsEditing(false)
  }

  


  return (
      <Draggable draggableId={id} index={index} key={id}>
          {
            (provided, snapshot) => (
              <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
              
              <div  className={ `${className}  mx-2 md:mx-0 flex rounded-md my-1 cursor-n-resize justify-between select-none py-3   transition-colors  ${ state === "FINISHED" ? "bg-green-100 hover:bg-green-200 dark:bg-green-700 dark:hover:bg-green-900" : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-900" }` } {...rest}>

                  <div className='px-2 py-3 inline-flex items-center'>
                    
                    {
                      !isEditing && <div className='flex justify-around min-w-28 w-auto'> <input onChange={ e => dispatch({ type: "TODO/SET_STATE", payload: { newState: e.target.checked ? "FINISHED": "RUNNING", id }}) } type="checkbox" /> <TodoStateText name={name} state={state} setIsEditing={ setIsEditing } />  </div>
                    }

                    {
                      isEditing && <form  onSubmit={ onSubmit }> <input required autoFocus onBlur={ () => setIsEditing(false) } className='bg-gray-50 outline-none border-2 border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-700 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' onChange={ e => setCurrentTodo(e.target.value) } value={ currentTodo } /> </form>
                    }

                  </div>

                  <div className='px-2 flex'>
                      {
                        state === "FINISHED" && 
                        <button onClick={ () => remove() } >
                          <i className='fas fa-trash p-3 transition-all hover:rounded-full hover:bg-white dark:text-white dark:hover:bg-gray-500'></i>
                        </button>
    
                      }
                  </div>
                </div>

              </div>
            )
        }
      </Draggable>
  )
}

export default Todo