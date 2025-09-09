import Button from './Button'
const items = [
  "Books",
  "Movies",
  "Cooking",
  "Travel",
  "Fitness",
  "Technology",
  "Art",
  "Music",
  "Photography",
  "Dance",
  "Science",
  "Fashion",
];


const ButtonList = () => {
  return (
    <div className='flex'>
     {
      items?.map((item,index)=>{
       return  <Button  name={item}  key={index}></Button>
      })
     }
    </div>
  )
}

export default ButtonList
