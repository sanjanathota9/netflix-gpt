import React from "react";
import { useSelector } from "react-redux";
import useGetTrailerVideoHook from "./hooks/useGetTrailerVideoHook";

const VideoBackground = ({ movieId }) => {
  const trailerVideoKey = useSelector(
    (store) => store.movies?.trailerVideo?.key
  );
  useGetTrailerVideoHook(movieId);
  return (
    <div>
      <iframe
        className="w-screen h-screen aspect-video"
        width="560"
        height="315"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideoKey +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
