import React from 'react'

const Card = ({data}) => {
    console.log(data)
  return (
    <div>

        <div>
            <h2></h2>
            <h2></h2>
            <p className ='text-8xl'>{data.Name}</p>
            <p></p>


        </div>



    </div>
    
  )
}

export default Card