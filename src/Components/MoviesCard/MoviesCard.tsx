import React, { useState } from "react";
import "./MoviesCard.css";
import MoviesModal from "../MoviesModal/MoviesModal";
import { useAppDispatch } from "../../core/redux/reduxStore";
import { MovieType, UIAction } from "../../core/redux/slices/UISlice";

const MoviesCard = (props: MovieType) => {
  const dispatch = useAppDispatch();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    dispatch(UIAction.setModalView(true));
    dispatch(UIAction.setSelectedMovie(props));
  }

  return (
    <>
      <div className="col-md-2 movies-column" onClick={openModal}>
        <img src={require(`../../images/${props.image}`).default} className="img-fluid movie-image" alt="timer" />
        <div className="movies-name text-center">{props.movie}</div>
      </div>
    </>
  );
};

export default MoviesCard;
