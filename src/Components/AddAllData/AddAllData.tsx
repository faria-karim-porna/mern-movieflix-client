import React from "react";
import fakeData from "../../fakeData";

const AddAllData = () => {
  const handleAddAllData = () => {
    fetch("https://mern-movieflix-server-production.up.railway.app/addAllData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fakeData),
    });
  };
  return (
    <div>
      <button onClick={handleAddAllData}>Add fake data</button>
    </div>
  );
};

export default AddAllData;
