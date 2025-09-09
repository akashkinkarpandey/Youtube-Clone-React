
// eslint-disable-next-line react/prop-types
const Videocards = ({info}) => {
  
  // eslint-disable-next-line react/prop-types
  const {snippet,statistics}=info;
  // eslint-disable-next-line react/prop-types
  const{channelTitle,title,thumbnails}=snippet;
  return (
    <div className='p-2 m-2 w-80 h-85 shadow-lg'>
      <img src={thumbnails?.medium?.url} alt='video' className='rounded-lg'></img>
      <ul>
      <li className='font-bold py-2'>{title}</li>
      <li>{channelTitle}</li>
      <li>{Math.max(Math.ceil(statistics?.viewCount/1000000),3)}M views</li>
      
     </ul> 
     {/* <img src={thumbnails.high}></img>
     */}
    </div>
  )
}
// eslint-disable-next-line react/prop-types
export const AdvideoCard=({info})=>{
  return (
  <div className='p-1 m-1 border border-red-900 bg-white'>
   <Videocards info={info}/>
   <h1 className='font-bold ml-9 '>ADS</h1>
  </div>
  );
}

export default Videocards
