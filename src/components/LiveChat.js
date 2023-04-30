import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { useSelector } from 'react-redux';
import { generateRandomName, makeRandomMessage } from '../utils/helper';
import { useState } from 'react';
const LiveChat = () => {
    const dispatch=useDispatch();
    const [liveMessage,setLiveMessage]=useState("");
    const chatMessages=useSelector((store)=>store.chat.messages);
    useEffect(
        ()=>{
            const timer=setInterval(()=>{
                // console.log('API POLLING')
                dispatch(addMessage({
                    name:generateRandomName(),
                    message:makeRandomMessage(14)
                }))
            },2000);
            return ()=>clearInterval(timer);
        }
        ,[]
    )
  return (
    <>
    <div className='w-full h-[390px] ml-2 m-2 p-2 border bg-slate-100 border-black overflow-y-scroll 
    flex flex-col-reverse' >
        <div>
        {
            chatMessages.map((c,index)=><ChatMessage
                key={index} 
                name={c.name} 
                message={c.message}/>)
        }
        </div>
    </div>
    <form className='w-full p-2 ml-2 border border-black' onSubmit={(e)=>{
        e.preventDefault()
        console.log("Onform submit ",liveMessage)
        dispatch(addMessage({
            name:"Akash Kinkar Pandey",
            message:liveMessage
        }))
        }}>
        <input className='w-80 px-2 ' type="text" value={liveMessage} 
        onChange={(e)=>setLiveMessage(e.target.value)}/>
        <button className='px-2 mx-2 w-16 bg-green-100'>Send</button>
    </form>
    </>
  )
}

export default LiveChat