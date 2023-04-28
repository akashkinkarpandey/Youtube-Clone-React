import React from 'react'

const commentsData=[
    {
        name:"Akash Kinkar Pandey",
        text:"Lorem ipsum kydekd sdcsc weeftbjgkbs1",
        replies:[
            {
                name:"Akash Kinkar Pandey",
                text:"Lorem ipsum kydekd sdcsc weeftbjgkbs99",
                replies:[
                ]
            }
        ]
    },
    {
        name:"Akash Kinkar Pandey",
        text:"Lorem ipsum kydekd sdcsc weeftbjgkbs2",
        replies:[
        ]
    },
    {
        name:"Akash Kinkar Pandey",
        text:"Lorem ipsum kydekd sdcsc weeftbjgkbs3",
        replies:[
        ]
    },
    {
        name:"Akash Kinkar Pandey",
        text:"Lorem ipsum kydekd sdcsc weeftbjgkbs4",
        replies:[
            {
                name:"Akash Kinkar Pandey",
                text:"Lorem ipsum kydekd sdcsc weeftbjgkbs5",
                replies:[
                    {
                        name:"Akash Kinkar Pandey",
                        text:"Lorem ipsum kydekd sdcsc weeftbjgkbs6",
                        replies:[
                        ]
                    },{
                        name:"Akash Kinkar Pandey",
                        text:"Lorem ipsum kydekd sdcsc weeftbjgkbs7",
                        replies:[
                            {
                                name:"Akash Kinkar Pandey",
                                text:"Lorem ipsum kydekd sdcsc weeftbjgkbs8",
                                replies:[
                                ]
                            }
                        ]
                    },
                    {
                        name:"Akash Kinkar Pandey",
                        text:"Lorem ipsum kydekd sdcsc weeftbjgkbs9",
                        replies:[
                        ]
                    }
                ]
            },
            {
                name:"Akash Kinkar Pandey",
                text:"Lorem ipsum kydekd sdcsc weeftbjgkbs10",
                replies:[
                ]
            }
        ]
    }
]
const Comment=({data})=>{
    const {name,text,replies}=data;
    return(
        <div className='flex shadow-sm bg-gray-200 p-2 rounded-lg'>
            <img className='w-8 h-8 ' alt="user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlvy9yU95WpoRTLZADixICA7HFiGL_EFb754kF9XbCqg&usqp=CAU&ec=48600113" />
            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}
const CommentsList=({comments})=>{
    if(comments.length===0)
    return 
    return(
        <div>
            {
                comments.map((comment,index)=>(
                    <div key={index}>
                    <Comment  data={comment}/>
                        <div className='pl-5 border border-l-black ml-5'>
                            <CommentsList  comments={comment.replies}/>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
       <h1 className='text-2xl font-bold'>Comments:</h1> 
       {/* <Comment data={commentsData[0]}/> */}
       <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer