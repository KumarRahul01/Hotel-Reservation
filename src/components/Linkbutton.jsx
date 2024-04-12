import React from 'react'
import { Link } from 'react-router-dom'

const Linkbutton = ({to, name}) => {
  return (
    <Link className="bg-slate-200 hover:bg-[#0A66C2] hover:text-white px-4 py-1 text-blue-700 font-medium rounded-sm transition-colors duration-300" to={to}>{name}</Link>

  )
}

export default Linkbutton