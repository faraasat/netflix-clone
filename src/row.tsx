import { FC, useEffect, useState } from "react";
import instance from "./axios";

interface IRow {
  title: string;
  fetchUrl: string;
}

const Row: FC<IRow> = ({ title, fetchUrl }) => {
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
      <div className="row__posters">
        {movies.map((movie: any) => {
          return (
            <span>
              <img
                className="row__poster"
                src={`${base_url}${movie.poster_path}`}
                alt={movie.name}
              />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Row;
