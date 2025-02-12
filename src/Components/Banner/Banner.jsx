import React, { useEffect, useState } from "react";
import axios from "../../Utils/axios";
import requests from "../../Utils/requests";
import Style from "./Banner.module.css";

function Banner() {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);

  function truncate(str, n) {
    return str?.lenrth > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div
      className={Style.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={Style.bannerContents}>
        <h1 className={Style.bannerTitle}>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className={Style.bannerButtons}>
          <button className={`${Style.bannerButton} ${Style.play}`}>
            Play
          </button>
          <button className={Style.bannerButton}>My List</button>
        </div>
        <h1 className={Style.bannerDescription}>
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className={Style.bannerFadeBottom} />
    </div>
  );
}

export default Banner;
