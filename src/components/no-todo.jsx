import React from 'react'
import { useTranslation } from 'react-i18next';

export const NoTodo = ({ className = "", children, ...rest }) => {
  
  const { t } = useTranslation()

    return (<div className='h-[80vh] flex flex-col justify-center items-center'>
        <p className='uppercase dark:text-white text-black'>{t("TODO_ADD_FIRST")}</p>
      </div>)
}

export default NoTodo