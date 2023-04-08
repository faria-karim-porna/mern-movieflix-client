import React, { useState } from "react";
import "./MoviesCard.css";
import MoviesModal from "../MoviesModal/MoviesModal";
import { useAppDispatch } from "../../core/redux/reduxStore";
import { UIAction } from "../../core/redux/slices/UISlice";
import { MovieType } from "../../core/types/moviesType";

const MoviesCard = (props: MovieType) => {
  const { id, movie, image, movieDescription, timeAndDate, seatsArrangement } = props;
  const dispatch = useAppDispatch();
  function openModal() {
    dispatch(UIAction.setModalView(true));
    dispatch(UIAction.setSelectedMovie({id, movie, image, movieDescription, timeAndDate, seatsArrangement }));
  }

  return (
    <>
      {image && movie ? (
        <>
          <div className="col-md-2 movies-column" onClick={openModal}>
            <img src={require(`../../images/${image}`).default} className="img-fluid movie-image" alt="timer" />
            <div className="movies-name text-center">{movie}</div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default MoviesCard;
