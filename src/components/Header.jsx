import React from 'react'
import logo from '../assets/quickserveLogo.jpg';
import { HiArrowLeftOnRectangle } from "react-icons/hi2";
import LanguageSwitcher from '../LanguageSwitcher';
const Header = () => {
  return (
    <div className="flex justify-between items-center p-4">
     <div className="flex items-center gap-2">
        <img
          src={logo}
          alt="QuickServe Logo"
          className="h-10 w-auto"
        />
        <span className="font-semibold text-lg">QuickServe</span>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search service or location"
        className="w-1/3 px-4 py-2 border rounded-full outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Login */}
      <LanguageSwitcher/>
      <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition h-10 w-auto">
        
        <HiArrowLeftOnRectangle className="text-xl" />
      </button>
     </div>
  )
}

export default Header
