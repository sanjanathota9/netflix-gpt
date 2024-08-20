import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../../utils/moviesSlice";
import { apiOptions } from "../../utils/constants";

const useGetPopularMoviesHook = () => {
  const getPopularMovieList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      apiOptions
    );
    const movieData = await data.json();
    dispatch(addPopularMovies(movieData.results));
  };
  useEffect(() => {
    getPopularMovieList();
  }, []);
  const dispatch = useDispatch();
};

export default useGetPopularMoviesHook;
