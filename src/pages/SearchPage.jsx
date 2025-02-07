import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Card from '../components/Card';

const SearchPage = () => {
  const location=useLocation()
  const [data,setData]=useState([]);
  const [page,setPage]=useState(1);
  const navigate=useNavigate()
  const query=location?.search?.slice(3)


  const fetchData = async () => {
    try {
      const response = await axios.get(`/search/multi`, {
        params: { 
          query:location?.search?.slice(3),
          page:page
        },
      });

      setData((preve) =>{
        return[
          ...preve,
          ...response.data.results
        ]
      })
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(()=>{
   if(query){
    setPage(1)
    setData([])
    fetchData()
   }
  },[location?.search])

    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
        setPage((prev) => (prev < page ? prev + 1 : prev)); // Stop at total pages
      }
    };
  
    useEffect(() => {
      if(query){
        fetchData();
      }
      
    }, [page]); // Calls API when PageNo updates
   
      useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll); // Cleanup listener
      }, [page]); // Re-add listener when total pages update
    

  return (
    <div className='pt-16 '>
      <div className='lg:hidden my-2 mx-1 sticky top-[70px] z-40 '>
        <input type="text" 
        placeholder='Search here...'
        onChange={(e)=>{navigate(`/search?q=${e.target.value}`)}}
        className='px-4 py-1 text-lg w-full bg-white rounded-full text-neutral-900'
        />
      </div>
      <div className='container mx-auto'>
      <h3 className="capitalize text-lg lg:text-xl font-semibold my-3">
          Search Results
        </h3>
        <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start">
          {data.map((searchData,index) => (
            <Card
              data={searchData}
              key={searchData.id + "searchSection"}
              media_type={searchData.media_type}
            />
          ))}
        </div>

      </div>
      
    </div>
  )
}

export default SearchPage
