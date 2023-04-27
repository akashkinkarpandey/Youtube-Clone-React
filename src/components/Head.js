import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
  const dispatch=useDispatch();
  const toggleMenuHandler=()=>{
    dispatch(toggleMenu());
  }
  
  return (
    <div className="grid grid-flow-col shadow-lg"> 
    <div className="flex col-span-1">
        <img onClick={()=>toggleMenuHandler()} className="h-13 mx-2 cursor-pointer" alt="menu" src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg" />
        <a href="/">
        <img className="h-16 mx-1" alt="youtube-logo" src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500" />
        </a>
    </div>
    <div className='col-span-10 py-2 h-1  px-10'>
        <input className="w-1/2 border border-gray-300 p-2 rounded-l-full" type="text"/>
        <button className="border border-gray-900 p-2 px-5 rounded-r-full bg-gray-100">
          🔍
        </button>
    </div>
    <div className='col-span-1'>
        <img className="h-16 py-3" alt="user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlvy9yU95WpoRTLZADixICA7HFiGL_EFb754kF9XbCqg&usqp=CAU&ec=48600113"/>
    </div>
    </div>
  )
}

export default Head