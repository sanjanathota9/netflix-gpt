import React from "react";
import Header from "./Header";
import useNowPlayingHooks from "./hooks/useNowPlayingHooks";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useGetPopularMoviesHook from "./hooks/useGetPopularMoviesHook";
import useTopRatedMoviesHooks from "./hooks/useTopRatedMoviesHooks";
import useGetUpcomingMoviesHook from "./hooks/useGetUpcomingMoviesHook";

const Browse = () => {
  useNowPlayingHooks();
  useGetPopularMoviesHook();
  useTopRatedMoviesHooks();
  useGetUpcomingMoviesHook();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
