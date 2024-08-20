import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../../utils/moviesSlice";
import { apiOptions } from "../../utils/constants";

const useNowPlayingHooks = () => {
  const getNowPlayingMovieList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=te-IN&page=1",
      apiOptions
    );
    const movieData = await data.json();
    dispatch(addNowPlayingMovies(movieData.results));
  };
  useEffect(() => {
    getNowPlayingMovieList();
  }, []);
  const dispatch = useDispatch();
};

export default useNowPlayingHooks;
