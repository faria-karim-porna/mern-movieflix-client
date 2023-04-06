import React, { useState } from "react";
import "./MoviesModal.css";
import { Modal } from "react-bootstrap";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";

import SeatIcon from "../SeatIcon/SeatIcon";
import movies from "../../fakeData/movies";
import { useAppDispatch, useAppSelector } from "../../core/redux/reduxStore";
import { shallowEqual } from "react-redux";
import { UIAction } from "../../core/redux/slices/UISlice";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(9, 1, 1, 0.878)",
  },
  content: {
    backgroundColor: "black",
    border: "1px solid red",
    width: "450px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const MoviesModal = () => {
  // const { modalIsOpen, setIsOpen, movie } = props;
  const store = useAppSelector(
    (state) => ({
      movie: state.UI.selectedMovieInfo,
      isModalOpen: state.UI.showModal,
    }),
    shallowEqual
  );
  const dispatch = useAppDispatch();
  // const seats = store.movie?.seatsArrangement;
  const email = localStorage.getItem("email");
  const name = localStorage.getItem("name");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [saved, setSaved] = useState(false);

  // function openModal() {
  //   setIsOpen(true);
  // }

  function closeModal() {
    dispatch(UIAction.setModalView(false));
  }
  const handleChange = (e: any) => {
    if (e.target.name == "date") {
      setDate(e.target.value);
    }
    if (e.target.name == "time") {
      setTime(e.target.value);
    }
  };

  function handleSubmission(e: any) {
    console.log(store.movie?.id);
    // for (let [key, value] of Object.entries(sessionStorage)) {
    //   console.log(`${key}: ${value}`);
    //   let id = store.movie?.id;
    //   let sid = value;
    //   let status = "true";

    //   let seatStatus = { id, sid, status };

    //   fetch("https://mern-movieflix-server-production.up.railway.app/updateStatus", {
    //     method: "PATCH",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(seatStatus),
    //   })
    //     .then((res) => res.json())
    //     .then((result) => {
    //       console.log(result);
    //     });

    //   const newBooking = {
    //     email: email,
    //     userName: name,
    //     movieName: movie.movie,
    //     date: date,
    //     time: time,
    //     seatId: sid,
    //   };

    //   fetch("https://mern-movieflix-server-production.up.railway.app/addBookings", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(newBooking),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //     });
    // }
    setSaved(true);
    sessionStorage.clear();
    e.preventDefault();
  }

  // style={customStyles}
  return (
    <div>
      <Modal show={store.isModalOpen}>
        <div className="d-flex justify-content-end">
          <CancelRoundedIcon onClick={closeModal} className="cancel-icon"></CancelRoundedIcon>
        </div>
        {store.movie?.image && store.movie?.movie && store.movie?.movieDescription ? (
          <>
            <div className="row">
              <div className="col-4">
                <img src={require(`../../images/${store.movie?.image}`).default} className="img-fluid modal-movie-image" alt="timer" />
              </div>
              <div className="modal-image-border"></div>
              <div className="col-7">
                <div className="movie-title">{store.movie?.movie}</div>
                <div className="movie-description">{store.movie?.movieDescription}</div>
              </div>
            </div>
            <div className="modal-horizontal-line w-100 mt-3 mb-3"></div>
            <form onSubmit={handleSubmission}>
              <div className="row">
                <div className="col-7">
                  <div className="row">
                    {store.movie?.seatsArrangement && store.movie?.seatsArrangement?.length > 0
                      ? store.movie?.seatsArrangement.map((seat) => (
                          <SeatIcon sid={seat.sid} color={seat.color} backgroundColor={seat.backgroundColor} status={seat.status}></SeatIcon>
                        ))
                      : null}
                  </div>
                </div>
                <div className="col-5">
                  <label htmlFor="date" className="dateText">
                    Select a Date:
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="w-100 date"
                    placeholder="MM/DD/YYYY"
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="time" className="timeText mt-1">
                    Select a Time:
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    className="w-100 time"
                    placeholder="HH:MM AM/PM"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center w-100">
                <button type="submit" className="save-button">
                  Save
                </button>
              </div>
              {saved && <div className="confirmation-text text-center">Successfully Saved</div>}
            </form>
          </>
        ) : null}
      </Modal>
    </div>
  );
};

export default MoviesModal;
