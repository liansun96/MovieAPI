import React, { useEffect, useState } from "react";
import FilteredMovies from "./components/FilteredMovies";
import PopularMovies from "./components/PopularMovies";
import { motion } from "framer-motion";

const App = () => {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchPopular();
    fetchTopRated();
  }, []);

  const fetchPopular = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=7fe0fbe72550cf27a1a5a738cabda3db&language=en-US&page=1`
    );
    const { results } = await api.json();
    setPopular(results);
    setFiltered(results);
    console.log(results);
  };

  const fetchTopRated = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=7fe0fbe72550cf27a1a5a738cabda3db&language=en-US&page=1`
    );
    const { results } = await api.json();
    // console.log(results)
  };

  return (
    <div className="w-[1200px] mx-auto">
      <FilteredMovies
        popular={popular}
        filtered={filtered}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div className=" flex flex-wrap gap-10 justify-between mt-10">
        {filtered.map((movie) => (
          <PopularMovies key={movie.id} {...movie} />
        ))}
      </motion.div>
    </div>
  );
};

export default App;
