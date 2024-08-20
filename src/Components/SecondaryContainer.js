import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies && (
      <div className="bg-black">
        <div className="-mt-56 relative z-20">
          <MovieList
            title={"Now Playing"}
            movies={movies.nowPlayingMovies}
          ></MovieList>
          <MovieList
            title={"Popular"}
            movies={movies.popularMovies}
          ></MovieList>
          <MovieList
            title={"Top Rated"}
            movies={movies.topRatedMovies}
          ></MovieList>
          <MovieList
            title={"Upcoming Movies"}
            movies={movies.upcomingMovies}
          ></MovieList>
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
