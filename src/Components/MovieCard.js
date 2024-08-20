import React from "react";
import { IMG_URL } from "../utils/constants";

function MovieCard({ posterPath }) {
  return (
    <div className="w-48 pr-4">
      <img alt="movie card" src={IMG_URL + posterPath}></img>
    </div>
  );
}

export default MovieCard;
