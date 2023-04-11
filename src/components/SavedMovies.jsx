import React, { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { useAuthContext } from "../context/AuthContext";
import { AiOutlineClose } from "react-icons/ai";

const SavedMovies = () => {
  const { user } = useAuthContext();
  const [movies, setMovies] = useState([]);

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const movieRef = doc(db, "users", `${user?.email}`);

  const deleteShow = async (id) => {
    try {
      const result = movies.filter((item) => item.id !== id);
      await updateDoc(movieRef, {
        savedShows: result,
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);
  return (
    <>
      <h2 className="text-bold md:text-xl p-4">My Movies</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          size={40}
          className="rounded-full bg-white text-black left-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          onClick={slideLeft}
        />
        <div
          id={"slider"}
          className="overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide w-full h-full relative"
        >
          {movies?.map((movie, index) => (
            <div
              key={movie.id}
              className="w-[160px] sm:w-[200px] md:w-[240px] lg-w[280px] inline-block cursor-pointer relative p-2"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie?.img}`}
                alt={movie?.title}
                className="w-full h-auto block"
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 ">
                <p className="white-space-normal text-xs md:text-sm flex justify-center items-center h-full w-[100%] font-bold p-4">
                  {movie?.title}
                </p>
                <AiOutlineClose
                  className="absolute top-2 right-4 bg-red-600 rounded-full"
                  onClick={() => deleteShow(movie.id)}
                />
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

export default SavedMovies;
