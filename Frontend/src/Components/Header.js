import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
  
  <>
 
  <header className="text-white bg-slate-800 font-Abadi body-font">

   
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    
      <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          className="w-10 h-10 text-gray-900 p-2 bg-red-800 rounded-full"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="ml-5 text-2xl font-serif text-orange-700">CaR Sale</span>
      </a>
      <nav className="md:ml-auto flex flex-wrap items-center font-serif text-base justify-center">
     <div className="flex justify-center">
     <Link to="/listings" className="bg-blue-500 text-white px-4 py-2 rounded mr-2">View Listings</Link>
        <Link to="/car-detail" className="bg-green-500 text-white px-4 py-2 rounded">Sell Your Car</Link>
   </div>
     </nav>
   

    </div>
  </header>

  </>

  )
}

export default Header
