import React from "react";
import {TiStar} from "react-icons/ti";

const PopularMovies = ({ title, poster_path, release_date, vote_average }) => {
  console.log();

  return (
    <div className="group w-[200px] h-[380px] space-y-2 rounded-lg duration-200 overflow-hidden hover:shadow-lg">
      <div className="h-[300px] overflow-hidden relative">
        <img
          className="duration-200 group-hover:scale-105"
          src={`https://image.tmdb.org/t/p/w200/` + poster_path}
          alt=""
        />
        <div className="flex items-center px-1 space-x-1 rounded-lg absolute right-3 bottom-3 bg-black bg-opacity-75">
          <TiStar className="text-lg text-lime-500" />
          <p className="text-sm font-bold text-violet-50">{vote_average}</p>
        </div>
      </div>
      <div className="px-2 space-y-2 mb-2 ">
        <p className="text-xs font-bold">{title}</p>
        <p className="text-sm font-thin">{release_date}</p>
      </div>
    </div>
  );
};

export default PopularMovies;
