import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  API_KEY,
  BASE_API,
  fetchTopRatedMovies,
  img_url,
  fetchGenres,
  fetchPopularMovie,
} from "../api/index";

import classes from "../modules/Carousel.module.scss";

const Home = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
  const [genreId, setGenreId] = useState();
  const navigate = useNavigate();

  const fetchMovies = async () =>
    await fetchPopularMovie().then((response) => {
      const movies = response.data.results.splice(0, 3);
      const subData = [];
      subData.push(...data);
      subData.push(...movies);
      setData(subData);
    });

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div data-cy="movies-list">
      {data.map((desc, i) => (
        <div
          data-cy="movie-item"
          key={desc.id}
          className={classes.carousel}
          onClick={() => navigate(`${desc.id}`)}
        >
          <div>
            <img
              className={classes.carousel__moviePoster}
              src={`${img_url}${desc.poster_path}`}
            />
          </div>
          <div className={classes.carousel__movieDetails}>
            <p>{desc.title}</p>
            <h4>Release Date: {desc.release_date}</h4>
            <h4>Vote Count: {desc.vote_count}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
