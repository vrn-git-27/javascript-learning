import React from 'react'

const Card = ({data}) => {
    console.log(data)
  return (
    <div>
      


        <div>
            <h2></h2>
            <h2></h2>
            
            
            <p className ='text-4xl'>{data.Name}</p>
            <p className ='text-4xl'>{data.Channel}</p>
            <p className ='text-4xl'>{data.Views}</p>
            <p className ='text-4xl'>{data.Upload_date}</p>
            <p></p>


        </div>



    </div>
    
  )
}

export default Card