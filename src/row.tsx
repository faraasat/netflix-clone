import { FC, useEffect, useState } from "react";
import "./Row.css";
import instance from "./axios";

interface IRow {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
}

const Row: FC<IRow> = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState<any>([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      setMovies(request.data.results);
      return await request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className={"row__posters"}>
        {movies.map((movie: any) => {
          return (
            <>
              <img
                key={movie.id}
                className={`row__poster  ${isLargeRow && "row__posterLarge"}`}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Row;
