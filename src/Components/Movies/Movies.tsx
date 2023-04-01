import React, { useEffect } from "react";
import "./Movies.css";

import { useState } from "react";

import MoviesCard from "../MoviesCard/MoviesCard";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
const Movies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/showMoviesInfo")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);
  const email = localStorage.getItem("email");
  const signOut = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div>
      <div className="movies-section pb-2">
        <div className="container">
          <div className="d-flex justify-content-between pt-3 pb-3">
            <Link to="/" className="link">
              <p className="site-name">
                Movie<span className="site-name-red">flix</span>
              </p>
            </Link>
            {!email ? (
              <Link to="/login" className="link">
                <p className="login-logout-button">Login</p>
              </Link>
            ) : (
              <Link to="/login" className="link">
                <p className="login-logout-button" onClick={signOut}>
                  Logout
                </p>
              </Link>
            )}
          </div>
          <div className="row">
            {movies.map((movie) => (
              <MoviesCard movie={movie}></MoviesCard>
            ))}
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Movies;
