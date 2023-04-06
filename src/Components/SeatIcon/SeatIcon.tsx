import React, { useState } from "react";
import "./SeatIcon.css";
import EventSeatRoundedIcon from "@material-ui/icons/EventSeatRounded";
import { IconButton } from "@material-ui/core";
import { SeatArrangementType } from "../../core/types/moviesType";
const SeatIcon = (props: SeatArrangementType) => {
  const { sid, color, backgroundColor, status } = props;
  const [seatColor, setSeatColor] = useState(color);
  const [seatBackgroundColor, setSeatBackgroundColor] = useState(backgroundColor);
  const seatStyle = {
    color: seatColor,
    backgroundColor: seatBackgroundColor,
  };
  function changeColor(seatColor: any, seatBackgroundColor: any) {
    if (sid) {
      if (seatColor == "red") {
        setSeatColor("black");
        sessionStorage.setItem(`seat no ${sid}`, sid);
      }
      if (seatColor == "black") {
        setSeatColor("red");
        sessionStorage.removeItem(`seat no ${sid}`);
      }
      if (seatBackgroundColor == "black") {
        setSeatBackgroundColor("red");
      }
      if (seatBackgroundColor == "red") {
        setSeatBackgroundColor("black");
      }
    }
  }
  return (
    <div className="col-2">
      <IconButton className="button-icon" disabled={status ? true : false}>
        {" "}
        <EventSeatRoundedIcon
          className="seat-icon"
          style={seatStyle}
          onClick={() => {
            changeColor(seatColor, seatBackgroundColor);
          }}
        />
      </IconButton>
    </div>
  );
};

export default SeatIcon;
