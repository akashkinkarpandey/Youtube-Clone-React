import React from 'react'
import { Button } from './Button'

const list=["Streaming","All","Live","Game","Cricket","Soccer","Cooking","Badminton"]
const ButtonList = () => {
  return (
   <div className='flex '>
    {
      list.map((item,index)=>(
        <Button key={item} name={item}/>
      ))
    }
   </div>
  )
}

export default ButtonList