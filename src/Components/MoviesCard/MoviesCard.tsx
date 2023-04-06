import React, { useState } from "react";
import "./MoviesCard.css";
import MoviesModal from "../MoviesModal/MoviesModal";
import { useAppDispatch } from "../../core/redux/reduxStore";
import { UIAction } from "../../core/redux/slices/UISlice";
import { MovieType } from "../../core/types/moviesType";

const MoviesCard = (props: MovieType) => {
  const { image, movie, movieDescription, timeAndDate, seatsArrangement } = props;
  const dispatch = useAppDispatch();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    dispatch(UIAction.setModalView(true));
    dispatch(UIAction.setSelectedMovie({ movie, image, movieDescription, timeAndDate, seatsArrangement }));
    setIsOpen(true);
  }

  return (
    <>
      {image && movie ? (
        <>
          <div className="col-md-2 movies-column" onClick={openModal}>
            <img src={require(`../../images/${image}`).default} className="img-fluid movie-image" alt="timer" />
            <div className="movies-name text-center">{movie}</div>
          </div>
          {/* <MoviesModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} movie={props}></MoviesModal> */}
        </>
      ) : null}
    </>
  );
};

export default MoviesCard;
