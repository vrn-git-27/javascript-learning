'use client'
import React, { useEffect, useState } from 'react'

const page = () => {
    const arr=["apple","orange"]
const db ="mysql"
    const [name,setName]=useState(arr)
    
     const [count,setCount]= useState(0)

     useEffect(()=>{
    console.log(count)
     },[count])
    
    
    
  return (

    <div>
        <button onClick={()=>{setCount(count+1)}} className='text-8xl bg bg-green-400 px-4 py-2'>+</button>
        <button onClick={()=>{setCount(count-1)}}className='text-8xl  bg-red-400 px-4 py-2'>-</button>
        

        <h2>{count}</h2>
    
    </div>
  )
}

export default page