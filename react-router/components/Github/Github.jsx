import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
 

      const data =  useLoaderData()
    // const [data , setData] = useState([]);

    // useEffect(()=>{
    //     fetch(`https://api.github.com/users/pemanamgur`)
    //     .then((respose) => respose.json())
    //     .then((data)=> {
    //         setData(data)
    //         console.log(data)
    //     })
    // },[])

  return (
    <div className='text-center bg-gray-500 p-4 text-3xl'>
      Github Followers : {data.followers}
    </div>
  )
}

export default Github



export const githubInfoLoader = async()=>{
   const response  = await    fetch(`https://api.github.com/users/pemanamgur`)
   return response.json()
}