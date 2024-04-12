import React from 'react'

const Ctabutton = ({name}) => {
  return (
    <button className="bg-[#0A66C2] px-4 py-1 w-fit rounded-sm mt-2 mb-10 hover:bg-white hover:text-blue-700 transition-colors duration-300 font-medium">{name}</button>
  )
}

export default Ctabutton