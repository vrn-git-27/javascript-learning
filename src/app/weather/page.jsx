'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const page = () => {
    const [weather,setWeather]= useState()

    const [city,setCity]=useState("Kochi")
    const[loading,setLoading]=useState(false)
    const getWeather = async () => {
    if (!city) return;

    try {
      setLoading(true);

      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            q: city,
            appid:"19e76b2055205c884a411e50531247ce",
            units: "metric",
          },
        },
      );

      setWeather(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
useEffect(()=>{
    getWeather()
},[]
)
  return (
    <div>page</div>
  )
}

export default page