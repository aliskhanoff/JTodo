import React, { useContext, useState } from 'react'
import { TodoContext } from '../context';
import { Translation } from 'react-i18next';

export const Footer = () => {

  const {dispatch } = useContext(TodoContext)
  const [todoName, setTodoName] = useState("");

  const onSubmit = form => {
    form.preventDefault();
    
    dispatch({
      type: "TODO/ADD",
      payload: todoName
    });

    setTodoName("")
    form.target.elements["todo_name"].focus;
  }

  return (
    <form className="flex justify-self-end w-full justify-center px-5 py-2 h-[10vh]" onSubmit={ onSubmit }>
      <Translation>
        {
          t => (<input maxLength="128" required placeholder={t("TODO_PLACEHOLDER")} name="todo_name" type="text" className="px-2 py-1 outline-none border-2 border-gray-300 focus:border-gray-500 rounded-md w-full" onChange={ e => setTodoName(e.target.value) } value={ todoName } />)
        }
      </Translation>
      <Translation>
        {
          t => (<button className="px-5 mx-1 py-1 rounded-md text-sky-700 hover:text-sky-100 bg-sky-300 hover:bg-sky-800 duration-100 transition-colors" type="submit">{ t("TODO_ADD") }</button>)
        }
      </Translation>
    </form>
  )
}

export default Footer