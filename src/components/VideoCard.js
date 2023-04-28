import React from 'react'

const VideoCard = ({info}) => {
  const {snippet,statistics}=info;
  const {channelTitle,title,thumbnails}=snippet;
  console.log(info);
  return (
    <div className='p-2 m-2 w-64 shadow-lg'>
        <img className='rounded-lg' src={thumbnails.medium.url} alt="Cannot find"/>
        <ul>
            <li className='font-bold text-2xl'>{title}</li>
            <li className='font-bold text-xl'>{channelTitle}</li>
            <li className='font-bold'>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}
export const RedBorderVideoCard=({component})=>{
  return (
    <div className='p-1 m-1 border border-red-900'>
      <VideoCard info={component}/>
    </div>
  )
}
export default VideoCard