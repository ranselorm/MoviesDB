import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
const Movie = ({ movie }) => {
  const [like, setLike] = useState(false);

  return (
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
  );
};

export default Movie;
