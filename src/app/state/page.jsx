'use client'
import React, { useState } from 'react'

const page = () => {
    const arr=["apple","orange"]
const db ="mysql"
    const [name,setName]=useState(arr)
    
        
    
  return (
    <div>
        <div>
            {
                name.map((data)=> {
                    return(
                        <p key ={data}>{data}</p>
                        
                    )
                }

            )
            }
        </div>
        <button onClick={()=>{setName(["FRUITS"])}}>click me</button>
    <div>{name}</div>
    </div>
  )
}

export default page