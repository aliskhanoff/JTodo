import React from 'react'
import landing_image from './assets/under_construction.svg';

export const Index = React.memo(({ className, ...rest }) => {
  return (
    <div className="page">
    <div className={`${className} h-auto min-h-[90vh] bg-yellow-50 flex justify-center sm:items-center`} {...rest}>
        
        
        <div className='order-1 hidden md:flex md:flex-col justify-center items-center h-full w-1/2'>
            <p className='text-8xl md:text-6xl lg:text-8xl text-yellow-800 hover:text-yellow-600 transition-colors'> <b> Your </b> </p>
            <p className='text-8xl md:text-6xl lg:text-8xl text-yellow-800 hover:text-yellow-600 transition-colors'> <b> Best </b> </p>
            <p className='text-8xl md:text-6xl lg:text-8xl text-yellow-800 hover:text-yellow-600 transition-colors'> <b> Construction </b> </p>
            <p className='text-8xl md:text-6xl lg:text-8xl text-yellow-800 hover:text-yellow-600 transition-colors'> <b> Service </b> </p>
        </div>
        
        <div className='order-1 sm:block w-1/2'>

            <div className='img__wrapper mt-16 sm:my-0 rounded-full'>
              <img src={landing_image} width="750" height="750" alt="" />
            </div>

            <div className='order-1 sm:hidden flex flex-col justify-center items-center h-full w-1/2'>
              <p className='sm:text-4xl md:text-6xl text-6xl'> <b> Your </b> </p>
              <p className='sm:text-4xl md:text-6xl text-6xl'> <b> Best </b> </p>
              <p className='sm:text-4xl md:text-6xl text-6xl'> <b> Construction </b> </p>
              <p className='sm:text-4xl md:text-6xl text-6xl'> <b> Service </b> </p>
            </div>

        </div>

    </div>


    <div className='landing__feedback bg-yellow-100 py-40 text-yellow-600'>

      <h1 className='mt-20 w-full text-center text-4xl uppercase'>
        Our clients say:
      </h1>

      <figure class="mx-auto max-w-screen-md text-center mb-40 mt-20">

        <svg aria-hidden="true" class="mx-auto mb-3 w-12 h-12 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
        <blockquote>
        <p class="text-2xl italic font-medium text-gray-900 dark:text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, doloribus! Numquam nesciunt quaerat voluptas aliquam? Laborum aut ipsum ducimus facere, placeat sed! Deserunt iusto accusantium ipsum eum, earum vitae asperiores?</p>
        </blockquote>
          <figcaption class="flex justify-center items-center mt-6 space-x-3">
          <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
          
          <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
            <cite class="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</cite>
            <cite class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">Our client</cite>
          </div>

          </figcaption>
        </figure>

    </div>


    {/* //page */}
    </div>
  )
}, (prev, next) => prev === next);

export default Index