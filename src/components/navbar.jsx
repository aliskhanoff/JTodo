import React from 'react'
import { Link } from '@reach/router';
import { useTranslation } from 'react-i18next';

export const Navbar = ({ className = "" }) => {

  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false)


  return (
    <nav className={`${className} bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 shadow-lg`}>
      <div className="container flex flex-wrap justify-between items-center mx-auto">
      
      <a href="/" className="flex items-center">
          {/* <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" /> */}
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">JTodo</span>
      </a>
      
      <button onClick={ () => setIsOpen(!isOpen) } data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
      </button>

      <div onClick={ () => setIsOpen(false) } className={ `${ isOpen ? "absolute sm:block right-5 top-12 w-60 md:top-0 md:relative " : "hidden" } cursor-pointer md:block md:w-auto` } id="navbar-default">
        
        <ul className="shadow-md md:shadow-none flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

          <li>
            <a onClick={ () => {
              i18n.changeLanguage("en");
              setIsOpen(false)
            } } className='block py-2 pr-4 pl-3 hover:underline  md:p-0 dark:text-white'>En</a>
          </li>

          <li>
            <a onClick={ () => {i18n.changeLanguage("ru"); setIsOpen(false)} } className='block py-2 pr-4 pl-3 hover:underline  md:p-0 dark:text-white'>Ru</a>
          </li>

          <li>
            <Link onClick={ () => setIsOpen(false) } to="/about">
              <p className="block py-2 pr-4 pl-3 hover:text-white hover:bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">{ t("ABOUT") }</p>
            </Link>
          </li>   
        
        </ul>

      </div>
      </div>
    </nav>
  )
}

export default Navbar