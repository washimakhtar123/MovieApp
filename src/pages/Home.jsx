import React, { useEffect, useState } from "react";
import BannerHome from "../components/BannerHome";
import { useSelector } from "react-redux";
import HorizontalScollCard from "../components/HorizontalScollCard";
import axios from "axios";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const tradingData = useSelector((state) => state.movieoData.bannerData);
  const {data : nowPlayingData}=useFetch("/movie/now_playing");
  const {data : topRatedData}=useFetch("/movie/top_rated");
  const {data : popularTvShow}=useFetch("/tv/popular");
  const {data : onTheAirShowData}=useFetch("/tv/on_the_air");
  return (
    <div>
     <BannerHome/>
     <HorizontalScollCard data={tradingData} heading={"Tranding"} trending={true}/>
     <HorizontalScollCard data={nowPlayingData} heading={"NowPlaying"} media_type={"movie"}/>
     <HorizontalScollCard data={topRatedData} heading={"Top Rated Movies"} media_type={"movie"}/>
     <HorizontalScollCard data={popularTvShow} heading={"Popular TV Shows"} media_type={"tv"}/>
     <HorizontalScollCard data={onTheAirShowData} heading={"On The Air"} media_type={"tv"}/>
    </div>
  );
};

export default Home;
