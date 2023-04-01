import React, { useState } from "react";
import "./SeatIcon.css";
import EventSeatRoundedIcon from "@material-ui/icons/EventSeatRounded";
import { IconButton } from "@material-ui/core";
const SeatIcon = (props: any) => {
  const { seat } = props;
  const [seatColor, setSeatColor] = useState(seat.color);
  const [seatBackgroundColor, setSeatBackgroundColor] = useState(seat.backgroundColor);
  const seatStyle = {
    color: seatColor,
    backgroundColor: seatBackgroundColor,
  };
  function changeColor(seatColor: any, seatBackgroundColor: any) {
    if (seatColor == "red") {
      setSeatColor("black");
      sessionStorage.setItem(`seat no ${seat.sid}`, seat.sid);
    }
    if (seatColor == "black") {
      setSeatColor("red");
      sessionStorage.removeItem(`seat no ${seat.sid}`);
    }
    if (seatBackgroundColor == "black") {
      setSeatBackgroundColor("red");
    }
    if (seatBackgroundColor == "red") {
      setSeatBackgroundColor("black");
    }
  }
  return (
    <div className="col-2">
      <IconButton className="button-icon" disabled={seat.status}>
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
