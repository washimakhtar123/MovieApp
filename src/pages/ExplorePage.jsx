import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

const ExplorePage = () => {
  const params = useParams();
  const [PageNo, setPageNo] = useState(1);
  const [data, setData] = useState([]);
  const [totalPageNo, setTotalPageNo] = useState(0);

  const fetchData = async () => {
    if (PageNo > totalPageNo && totalPageNo !== 0) return; // Prevent extra API calls

    try {
      const response = await axios.get(`/discover/${params.explore}`, {
        params: { page: PageNo },
      });

      setData((prev) => [...prev, ...response.data.results]);
      setTotalPageNo(response.data.total_pages);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
      setPageNo((prev) => (prev < totalPageNo ? prev + 1 : prev)); // Stop at total pages
    }
  };

  useEffect(() => {
    fetchData();
  }, [PageNo]); // Calls API when PageNo updates
 
  useEffect(()=>{
    setPageNo(1)
    setData([])
    fetchData()
  },[params.explore])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup listener
  }, [totalPageNo]); // Re-add listener when total pages update

  return (
    <div className="py-16">
      <div className="container mx-auto">
        <h3 className="capitalize text-lg lg:text-xl font-semibold my-3">
          Popular {params.explore} Shows
        </h3>
        <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start">
          {data.map((exploreData) => (
            <Card
              data={exploreData}
              key={exploreData.id + "exploreSection"}
              media_type={params.explore}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
