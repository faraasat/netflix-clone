import { FC, useEffect, useState } from "react";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import "./Row.css";
import instance from "./axios";

interface IRow {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
}

const Row: FC<IRow> = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState<any>([]);
  const [trailerUrl, setTrailerUrl] = useState<string | null>("");
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      setMovies(request.data.results);
      return await request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts: any = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie: any) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url: any) => {
          // https://youtube.com/watch?v=dasasdasadadwq&banana=5  below work is to get value of v not banana
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error: any) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className={"row__posters"}>
        {movies.map((movie: any) => {
          return (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              className={`row__poster  ${isLargeRow && "row__posterLarge"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
