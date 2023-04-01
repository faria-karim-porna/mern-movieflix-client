import React from "react";
import "./Home.css";
import twitter from "../../images/twitter.png";
import facebook from "../../images/facebook.png";
import instragram from "../../images/instagram.png";
import play from "../../images/play.png";
import { Link } from "react-router-dom";
const Home = () => {
  const email = localStorage.getItem("email");
  const signOut = () => {
    localStorage.clear();
    window.location.reload(false);
  };
  return (
    <div>
      <div className="home-section">
        <div className="align-items-center social-media-icons">
          <img src={facebook} className="icons mb-4 w-50" />
          <img src={twitter} className="icons mb-4" />
          <img src={instragram} className="icons" />
        </div>

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
            <div className="col-lg-6 home-text-section">
              <div className="d-flex align-items-center home-description">
                <div>
                  <p className="home-description-title">
                    IT'S A <b>SHOW</b> TIME
                  </p>
                  <p className="home-description-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum ultrices lorem, at efficitur diam auctor id. Nam
                    scelerisque urna dictum aliquet faucibus. Nulla facilisi. Donec in ligula non elit egestas posuere vitae ac odio. Nullam
                    tincidunt volutpat metus, at accumsan libero ullamcorper vitae. Suspendisse potenti.
                  </p>
                  <Link to="/movies" className="link">
                    <div className="d-flex home-button-section">
                      <img src={play} className="home-button mr-3" />
                      <div className="d-flex align-self-center home-button-text">Let's watch the show</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-image"></div>
      </div>
    </div>
  );
};

export default Home;
