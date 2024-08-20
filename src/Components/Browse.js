import React from "react";
import Header from "./Header";
import useNowPlayingHooks from "./hooks/useNowPlayingHooks";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingHooks();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
