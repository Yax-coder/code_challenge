import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { BiCameraMovie } from "react-icons/bi";

import {
  fetchReviews,
  fetchSingleMovie,
  fetchSingleMovieCredits,
} from "../api";

import classes from "../modules/Details.modules.scss";
import { Button } from "../components/Buttons";
import { useLocalStorage } from "../utils";

function Details() {
  const { id } = useParams();
  const [wishList, setWishList, removeFromStore, isInStore] = useLocalStorage(
    "wishList",
    []
  );

  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const reviewsQuery = useQuery(["reviews", id], () => fetchReviews(id), {
    retry: false,
    select: (state) => state?.data,
  });
  const movieQuery = useQuery(["movie", id], () => fetchSingleMovie(id), {
    retry: false,
    select: (state) => state?.data,
  });
  const movieCreditsQuery = useQuery(
    ["moviecredits", id],
    () => fetchSingleMovieCredits(id),
    { retry: false, select: (state) => state?.data }
  );

  const movieData = movieQuery?.data;
  const reviewsData = reviewsQuery?.data;
  const movieCastData = movieCreditsQuery?.data?.cast;
  const movieCrewData = movieCreditsQuery?.data?.crew;
  const job = ["director", "producer"];

  const addToWishes = (wishes) => {
    if (wishList.includes(wishes)) {
      return;
    }
    setWishList([...wishList, wishes]);
    setListSize(wishList.length);
  };

  return (
    <div>
      <div className={classes.details}>
        <div className={classes.details__banner}>
          <img
            key={movieData?.id}
            src={`https://image.tmdb.org/t/p/w500` + movieData?.poster_path}
            alt=""
            width="400"
            height="600"
          />
        </div>
        <div className={classes.details__info} data-cy="back-home">
          <Button onClick={() => navigate("/")}>Back</Button>
          <h1>{movieData?.title}</h1>
          <h5>Overview: </h5>
          <h4>{movieData?.overview}</h4>

          <div className={classes.details__genre}>
            Genre:{" "}
            {movieData?.genres.map((item) => (
              <span key={item?.id} className={classes.details__genre__list}>
                {item.name}{" "}
              </span>
            ))}
          </div>
          <div className={classes.details__container} data-cy="movie-item-list">
            {isInStore(movieData?.title) ? (
              <Button onClick={() => removeFromStore(movieData?.title)}>
                Remove from Wishlist ❌
              </Button>
            ) : (
              <Button
                type="secondary"
                onClick={() => addToWishes(movieData?.title)}
              >
                Add to Wishlist 🔖
              </Button>
            )}
          </div>
          <div>
            <h6>
              Movie Released Date: <span>{movieData?.release_date}</span>
            </h6>
            <h6>Crew:</h6>
            {movieCrewData
              ?.filter((item) => job.includes(item.job.toLowerCase()))
              .map((item) => (
                <div className={classes.details__cast}>
                  <ul>
                    <li key={item}>
                      <strong>
                        {" "}
                        <BiCameraMovie />
                        {item.job}
                      </strong>
                      : {item.name}
                    </li>
                  </ul>
                </div>
              ))}
          </div>
        </div>
        <div className={classes.details__wishList}>
          <div className={classes.details__wishList__cover}>
            <h3>
              🔖My wish list{" "}
              <span className={classes.details__wishList__label}>
                {wishList.length}
              </span>
            </h3>
            <ul>
              {wishList.map((list) => (
                <li key={list}>{list}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={classes.details__castContainer}>
        <h2>Main Cast:</h2>
        {movieCastData?.map((item) => (
          <div className={classes.details__cast}>
            <ul>
              <li>
                <img
                  key={item}
                  width={"100"}
                  height={"150"}
                  src={
                    item.profile_path === null
                      ? `https://tigres.com.tr/wp-content/uploads/2016/11/orionthemes-placeholder-image-1.png`
                      : ` https://image.tmdb.org/t/p/w200${item?.profile_path}`
                  }
                  alt="cast pic"
                />

                <h6>
                  <strong>{item.name}</strong>
                </h6>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Details;
