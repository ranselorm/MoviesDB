import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);
  const [like, setLike] = useState(false);

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
            <div className="w-[160px] sm:w-[200px] md:w-[240px] lg-w[280px] inline-block cursor-pointer relative p-2">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
                alt={movie?.title}
                className="w-full h-auto block"
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 ">
                <p className="white-space-normal text-xs md:text-sm flex justify-center items-center h-full w-[100%] font-bold p-4">
                  {movie?.title}
                </p>
                <p>
                  {like ? (
                    <FaHeart className="absolute top-4 left-4 text-gray-400" />
                  ) : (
                    <FaRegHeart className="absolute top-4 left-4 text-gray-400" />
                  )}
                </p>
              </div>
            </div>
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
