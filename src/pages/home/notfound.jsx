import React from 'react'
import notfound from './assets/not-found.svg';

export const NotFound = ({  }) => {
  return (
    <div className='w-full min-h-[75vh] bg-yellow-200 flex flex-col justify-center items-center'>
   
      <div className='w-auto'>
          <img className='' width="355" height="355" src={ notfound } alt="" srcset="" />
      </div>     

      <div className=' w-auto flex flex-col justify-center text-yellow-800'>
        <h1 className='text-9xl'>404</h1>
        <h1 className='text-5xl'>Not found</h1>
      </div>     

    </div>
  )
}

export default NotFound