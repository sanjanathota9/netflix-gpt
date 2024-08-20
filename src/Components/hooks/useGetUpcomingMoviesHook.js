import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../../utils/moviesSlice";
import { apiOptions } from "../../utils/constants";

function useGetUpcomingMoviesHook() {
  const dispatch = useDispatch();
  const getUpcomingMovieList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      apiOptions
    );
    const movieData = await data.json();
    dispatch(addUpcomingMovies(movieData.results));
  };
  useEffect(() => {
    getUpcomingMovieList();
  }, []);
}

export default useGetUpcomingMoviesHook;
