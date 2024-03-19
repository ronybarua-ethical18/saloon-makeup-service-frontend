import React from 'react'

export default function SVNavMenus() {
  return (
    <div className="hidden md:flex items-center space-x-4">
      <a
        href="#"
        className="text-gray-600 transition duration-300 hover:text-violet-700"
      >
        Home
      </a>
      <a
        href="#"
        className="text-gray-600 transition duration-300 hover:text-violet-700"
      >
        About
      </a>
      <a
        href="#"
        className="text-gray-600 transition duration-300 hover:text-violet-700"
      >
        Services
      </a>
      <a
        href="#"
        className="text-gray-600 transition duration-300 hover:text-violet-700"
      >
        Contact
      </a>
    </div>
  )
}
