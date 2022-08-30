import { useReducer } from 'react'
import TodoContext from './todo-context'
import { v4 as uuid } from 'uuid';

const LOCALSTORAGE_NAME = "TODOS"

export const TodoProvider = ({ children }) => {

  const [state, dispatch] = useReducer((state, {type, payload}) => {
    
    switch(type) {

      case "TODO/REORDER": {
        const newState = [...payload]
        localStorage.setItem(LOCALSTORAGE_NAME,JSON.stringify(newState))
        return newState;
      }

      case "TODO/ADD": {
        if(!payload) {
          return state;
        }

        const newState = [...state, {name: payload, id: uuid(), state: "RUNNING", list: "common"}]
        localStorage.setItem(LOCALSTORAGE_NAME, JSON.stringify(newState))
        
        return newState;
      }
      
      case "TODO/SET_STATE": {

        console.log(payload?.newState)
          
          if(!payload?.newState) {
            return state;
          }

                  
          const newState = [...Array.from(state)]
          newState.forEach(todo => {
            if(todo.id === payload.id) {
              todo.state = payload.newState;
            }
          })

          localStorage.setItem(LOCALSTORAGE_NAME, JSON.stringify(newState));
          return [...newState];

      }

      case "TODO/UPDATE": {
        
        if(!payload.id || !payload.name) {
          return state;
        }


        const newState = [...Array.from(state)]
        newState.forEach(todo => {
          if(todo.id === payload.id) {
            todo.name = payload.name;
          }
        })
        localStorage.setItem(LOCALSTORAGE_NAME, JSON.stringify(newState));
        return [...newState];
      }

      case "TODO/DELETE": {
        const newState = [...state.filter(todo => todo.id != payload)];
        localStorage.setItem(LOCALSTORAGE_NAME, JSON.stringify(newState));

        return newState;
      }

      default: return state; 
    }

  }, JSON.parse(localStorage.getItem(LOCALSTORAGE_NAME) || "[]"))

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
        {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider