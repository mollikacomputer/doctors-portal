import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import Chair from "../../assets/images/chair.png";
import chairBg from "../../assets/images/bg.png";

const AppoinmentBanner = ({ date, setDate }) => {
  return (
    <div
      style={{
        background: `url(${chairBg})`,
        
      }}
      class="card card-side bg-base-100 shadow-xl flex-col min-h-screen lg:flex-row-reverse my-16"
    >
      <div>
        <figure>
          <img src={Chair} alt="Movie" />
        </figure>
      </div>
      <div class="card-body">
        <DayPicker mode="single" selected={date} onSelect={setDate}></DayPicker>
      </div>
    </div>
  );
};

export default AppoinmentBanner;
