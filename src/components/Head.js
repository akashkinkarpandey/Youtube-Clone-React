import React,{useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import {YOUTUBE_SEARCH_API} from '../utils/config'
const Head = () => {
  const [searchQuery,setSearchQuery]=useState("");
  const dispatch=useDispatch();
  const toggleMenuHandler=()=>{
    dispatch(toggleMenu());
  }
  useEffect(
    ()=>{
      // getSearchSuggestions();
      const timer=setTimeout(()=>getSearchSuggestions(),200)
      return ()=>{
        clearTimeout(timer)
      }
    },[searchQuery]
  )
  const getSearchSuggestions=async()=>{
    console.log('API  Call '+searchQuery)
    const data=await fetch(YOUTUBE_SEARCH_API+searchQuery);
    const json=await data.json();
    console.log(json[1]);
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
        <div>
        <input className="w-1/2 border border-gray-300 p-2 rounded-l-full" type="text" value={searchQuery} onChange={(e)=>{setSearchQuery(e.target.value)}}/>
        <button className="border border-gray-900 p-2 px-5 rounded-r-full bg-gray-100">
          🔍
        </button>
        </div>
        {/* <div className=''>
          <ul>
            <li>Iphone</li>
            <li>Iphone Pro</li>
            <li>Iphone Pro</li>
            <li>Iphone Pro</li>
            <li>Iphone Pro</li>
            <li>Iphone Pro</li>
            <li>Iphone Pro</li>
          </ul>
        </div> */}
    </div>
    <div className='col-span-1'>
        <img className="h-16 py-3" alt="user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlvy9yU95WpoRTLZADixICA7HFiGL_EFb754kF9XbCqg&usqp=CAU&ec=48600113"/>
    </div>
    </div>
  )
}

export default Head