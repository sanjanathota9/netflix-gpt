import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../../utils/moviesSlice";
import { apiOptions } from "../../utils/constants";

function useGetTrailerVideoHook(movieId) {
  const dispatch = useDispatch();
  const getTrailerVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      apiOptions
    );
    const videoData = await data.json();
    const filterData = videoData.results.filter((e) => e.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : videoData.results[0];
    console.log("trailer", trailer);
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getTrailerVideo();
  }, []);
}

export default useGetTrailerVideoHook;
