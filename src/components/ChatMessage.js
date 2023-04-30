import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-lg'>
        <img className="h-8" alt="user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlvy9yU95WpoRTLZADixICA7HFiGL_EFb754kF9XbCqg&usqp=CAU&ec=48600113"/>
        <span className='font-bold px-2'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage