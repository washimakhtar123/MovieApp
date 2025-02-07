import React, { useRef } from "react";
import Card from "../components/Card";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const HorizontalScollCard = ({ data = [], heading,trending ,media_type }) => {
  const containRef = useRef();

  const handleNext = () => {
    containRef.current.scrollLeft += 500;
  };

  const handlePrev = () => {
    containRef.current.scrollLeft -= 500;
  };

  return (
    <div className="container mx-auto px-4 my-10">
      <h2 className="text-xl lg:text-2xl font-bold mb-2 text-white capitalize">
        {heading}
      </h2>

      <div className="overflow-hidden relative">
        <div
          ref={containRef}
          className="grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col overflow-x-scroll gap-5 scroll-smooth transition-all scrollbar-hide"
        >
          {data?.map((data, index) => (
            <Card
              key={data?.id + "heading" + index}
              data={data}
              index={index + 1}
              trending={trending}
              media_type={media_type}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 left-0 w-full hidden lg:flex justify-between px-1 -translate-y-1/2">
          <button
            onClick={handlePrev}
            className="bg-black/50 p-3 rounded-full text-white hover:bg-black transition"
          >
            <FaChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="bg-black/50 p-3 rounded-full text-white hover:bg-black transition"
          >
            <FaChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScollCard;
