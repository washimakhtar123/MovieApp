import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BannerHome = () => {
  const bannerData = useSelector((state) => state.movieoData.bannerData);
  const imageURL = useSelector((state) => state.movieoData.imageURL);
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((prev) => (prev < bannerData.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentImage((prev) => (prev > 0 ? prev - 1 : bannerData.length - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentImage * 100}%)` }}>
        {bannerData.map((data, index) => (
          <div key={index} className="w-full h-screen relative flex-shrink-0">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={imageURL + data.backdrop_path}
                alt={data.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="absolute bottom-10 left-10 max-w-lg text-white space-y-3">
              <h2 className="text-3xl lg:text-5xl font-bold drop-shadow-lg">{data?.title || data?.name}</h2>
              <p className="text-gray-300 text-sm lg:text-base line-clamp-3">{data.overview}</p>
              <div className="flex items-center gap-4 text-gray-400">
                <p>⭐ {Number(data.vote_average).toFixed(1)}</p>
                <span>|</span>
                <p>👁️ {Number(data.popularity).toFixed(0)}</p>
              </div>
              <Link to={"/"+data?.media_type+"/"+data.id} > 
              <button className="bg-white text-black px-6 py-3 font-bold rounded-md mt-4 shadow-lg transition-all hover:scale-105 hover:bg-gradient-to-l hover:from-red-700 hover:to-orange-500 hover:text-white">
                Play Now
              </button>
              </Link>
             
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 left-0 w-full flex justify-between px-6 -translate-y-1/2">
        <button onClick={handlePrev} className="bg-black/50 p-3 rounded-full text-white hover:bg-black transition">
          <FaChevronLeft size={24} />
        </button>
        <button onClick={handleNext} className="bg-black/50 p-3 rounded-full text-white hover:bg-black transition">
          <FaChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default BannerHome;
