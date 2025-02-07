import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchDetail = (endpoint) => {
    const [data,setData]=useState()
    const [loding,setLoding]=useState(false)

    const fetchData=async()=>{
        try {
          setLoding(true)
          const response=await axios.get(endpoint)
          setLoding(false)
          setData(response.data)
        } catch (error) {
          console.error(error)
        }
      }
      useEffect(()=>{
        fetchData()
      },[endpoint])

      return {data,loding}
}

export default useFetchDetail
