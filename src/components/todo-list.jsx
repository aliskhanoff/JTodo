import React, { useContext } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { TodoContext } from '../context'
import Todo from './todo'

export const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext)
  const onDragEnd = ({source, destination}) => {
    if(!destination) { return; }

    const _elements = Array.from(state);
    const [removed] = _elements.splice(source.index, 1);
    
    _elements.splice(destination.index, 0, removed)
    dispatch({ type: "TODO/REORDER", payload: _elements })
  } 

  return (
      <div className="min-h-[80vh] py-5">
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                  {
                    (provided, snapshot) => (
                      <div ref={provided.innerRef} {...provided.droppableProps} className="flex flex-col">
                        {
                          state && state.map(({ name, id, ...rest }, i) => (
                              <Todo state={ rest["state"] } key={id} id={id} remove={ () => dispatch({ type: "TODO/DELETE", payload: id }) } index={i} name={name} />
                          ))
                        }
                        {provided.placeholder}
                      </div>
                    )
                  }          
                </Droppable>
            </DragDropContext>
          </div>
  )
}

export default TodoList