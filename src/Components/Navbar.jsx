import React from 'react'

const Navbar = ({children}) => {
  return (
    <div className=' bg-gray-900 flex items-center p-10 relative'>

        <div className=" absolute bottom-2 right-2 text-gray-500">
            Created By Jitendriya Meher
        </div>

        <div className=" max-w-md mx-auto w-full">

            <h1 className=' text-white text-center text-2xl font-bold mb-5'>
                Find Images
            </h1>

            {children}

        </div>
      
    </div>
  )
}

export default Navbar
