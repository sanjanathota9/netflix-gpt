import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ title, movies }) {
  return (
    <div className="px-6">
      <h1 className="text-3xl text-white py-4">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar ">
        <div className="flex">
          {movies?.map((e) => (
            <MovieCard key={e.id} posterPath={e.poster_path}></MovieCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
