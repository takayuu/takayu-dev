import React from 'react'
import { FiInfo } from 'react-icons/fi'

const TextInformation: React.FC = ({ children }) => {
  return (
    <p className="flex items-center justify-center text-gray-600 py-2 px-3 bg-gray-200 rounded">
      <FiInfo className="text-xl sm:text-sm" />
      <span className="ml-2 text-xs sm:ml-1">{children}</span>
    </p>
  )
}

export default TextInformation