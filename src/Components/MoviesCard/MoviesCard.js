import React, { useState } from 'react';
import './MoviesCard.css';
import MoviesModal from '../MoviesModal/MoviesModal';

const MoviesCard = ({movie}) => {
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
 
    return (
        <>
        <div className = "col-md-2 movies-column" onClick={openModal}>
                <img src = {require(`../../images/${movie.image}`).default} className = "img-fluid movie-image" alt= "timer"/>
                <div className = "movies-name text-center">{movie.movie}</div>
      </div>
      <MoviesModal modalIsOpen = {modalIsOpen} setIsOpen = {setIsOpen} movie = {movie}></MoviesModal>
      </>

    );
};

export default MoviesCard;