import React,{useMemo, useState} from 'react'
import { nthPrime } from '../utils/helper'
let c=0;
const Demo = () => {
  const [text,setText]=useState(0)
  const [isDarkTheme,setIsDarkTheme]=useState(true);
  console.log('rendering...')
  const prime=useMemo(()=>{c=c+1;console.log(c);return nthPrime(text)},[text]);
  return (
    <div className={
    "m-4 p-2 w-96 h-96 border border-black" + (isDarkTheme && " bg-black text-white")
    }
    >
    {/* <div className='m-4 p-2 w-96 h-96 border border-black bg-black'> */}
        <div>
            <button 
            className='m-10 p-2 bg-green-200'
            onClick={()=>setIsDarkTheme(!isDarkTheme)}
            >
                Toggle
            </button>
        </div>
        <div>
            <input className='border border-black w-72 px-2 text-black'
            type="number" value={text} onChange={(e)=>setText(e.target.value)}/>
        </div>
        <div>
            <h1>nth prime: {prime} </h1>
        </div>
    </div>
  )
}

export default Demo