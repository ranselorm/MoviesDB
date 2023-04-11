import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="text-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          size={40}
          className="rounded-full bg-white text-black left-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          onClick={slideLeft}
        />
        <div
          id={"slider" + rowID}
          className="overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide w-full h-full relative"
        >
          {movies?.map((movie, index) => (
            <Movie movie={movie} />
          ))}
        </div>
        <MdChevronRight
          size={40}
          className="rounded-full bg-white text-black right-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          onClick={slideRight}
        />
      </div>
    </>
  );
};

export default Row;
