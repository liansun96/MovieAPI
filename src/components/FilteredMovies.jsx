import React, { useEffect } from "react";
import { motion } from "framer-motion";
import MovieCategories from "./MovieCategories";



const FilteredMovies = ({popular, filtered , setFiltered , activeGenre , setActiveGenre}) => {

  const showAllGenre = () => {
    setActiveGenre(0)

  }

  useEffect(()=>{

    if (activeGenre === 0){
      setFiltered(popular)
      return;
    }

    const filterMovie = popular.filter((movie) => movie.genre_ids.includes(activeGenre));
    setFiltered(filterMovie)

  },[activeGenre])

  return (
    <div className="">
      <motion.div layout className="text-start space-x-5 mt-10">
      <button onClick={showAllGenre} className="px-3 py-1 rounded-md  bg-slate-300 duration-200 hover:bg-slate-500">
        All
      </button>
      <button onClick={()=>setActiveGenre(28)} className="px-3 py-1 rounded-md  bg-slate-300 duration-200 hover:bg-slate-500">
        Action
      </button>
      <button onClick={()=>setActiveGenre(35)} className="px-3 py-1 rounded-md  bg-slate-300 duration-200 hover:bg-slate-500">
        Comedy
      </button>
    </motion.div>
    <MovieCategories/>
    
    </div>
  );
};

export default FilteredMovies;
