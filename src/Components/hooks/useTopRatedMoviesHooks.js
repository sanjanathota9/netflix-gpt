import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../../utils/moviesSlice";
import { apiOptions } from "../../utils/constants";

function useTopRatedMoviesHooks() {
  const getTopRatedMovieList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      apiOptions
    );
    const movieData = await data.json();
    dispatch(addTopRatedMovies(movieData.results));
  };
  useEffect(() => {
    getTopRatedMovieList();
  }, []);
  const dispatch = useDispatch();
}

export default useTopRatedMoviesHooks;
