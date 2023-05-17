import React, { useEffect, useState } from "react";
import { Select, Option } from "@material-tailwind/react";
import SelectOption from "@material-tailwind/react/components/Select/SelectOption";

const MovieCategories = () => {
  const [movieCtgr, setMovieCtgr] = useState([]);

  const fetchMovieCtgr = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=7fe0fbe72550cf27a1a5a738cabda3db&language=en-US`
    );
    const { genres } = await api.json();
    console.log(genres);
    setMovieCtgr(genres);
  };

  useEffect(() => {
    fetchMovieCtgr();
  }, []);

  {movieCtgr?.map((ctgr) => (
    <option key={ctgr.id} value="1">{ctgr.name}</option>              
  ))}
  return (
    <div className="w-72">
      
    </div>
  );
};

export default MovieCategories;
