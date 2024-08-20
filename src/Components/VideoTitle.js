import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" h-screen aspect-video pt-[20%] px-6 absolute bg-gradient-to-r from-black text-white ">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p>{overview}</p>
      <div className="flex py-8">
        <button className="bg-white text-black text-lg mr-2 py-2 px-12 rounded-lg hover:bg-opacity-50 ">
          Play
        </button>
        <button className="bg-gray-500 text-white text-lg py-2 px-12 bg-opacity-50 rounded-lg">
          Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
