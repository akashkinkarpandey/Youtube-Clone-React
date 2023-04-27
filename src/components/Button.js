import React from 'react'

export const Button = ({name}) => {
  return (
    <div>
        <button className="px-5 py-2 m-5 bg-gray-200 rounded-lg">{name}</button>
    </div>
  )
}
