import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MobileNavigation from "./components/MobileNavigation";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setBannerData,setImageURL } from "./store/movieoSlice";

const App = () => {
const dispatch=useDispatch();

const featchTrandingData= async()=>{
  try {
    const response=await axios.get("/trending/all/week")
    dispatch(setBannerData(response.data.results));
    console.log("response",response.data.results)
    
  } catch (error) {
    console.log("Error",error)
  }
}

const fetchConfiguration=async()=>{
  try {
    const response=await axios.get("/configuration");
    dispatch(setImageURL(response.data.images.secure_base_url+"original"));

  } catch (error) {
    console.error(error)
  }
}
useEffect(()=>{
  featchTrandingData()
  fetchConfiguration()
},[])

  return (
    <main className="pb-4 lg:pb-0">
      <Header />
      <div className="min-h-[100vh]">
        <Outlet />
      </div>
      <Footer/>
      <MobileNavigation />
    </main>
  );
};

export default App;
