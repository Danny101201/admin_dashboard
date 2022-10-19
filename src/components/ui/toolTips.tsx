import React from 'react'
import { FiSettings } from 'react-icons/fi';

interface ToolTipsProps {
  text: string,
  onClick?: () => void
}
function ToolTips({ text, onClick }: ToolTipsProps) {
  return (
    <button className="relative bg-green-400 rounded-full p-4 hover:shadow-md" onClick={onClick}>
      <FiSettings className='peer text-white hover:text-gray-400 w-[1.5rem] h-[1.5rem]' />
      <div className="absolute top-[-80%] translate-x-[-100%] bg-gray-200 p-1 peer-hover:opacity-100 opacity-0 before:content-['▼'] before:absolute before:bottom-[-40%] before:left-[50%] before:text-gray-200">{text}</div>
    </button>
  )
}

export default ToolTips