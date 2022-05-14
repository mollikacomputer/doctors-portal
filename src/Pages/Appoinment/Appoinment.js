import { useState } from "react";
import "react-day-picker/dist/style.css";
import Footer from "../Common/Footer";
import AppoinmentBanner from "./AppoinmentBanner";
import AvailableAppoinment from "./AvailableAppoinment";

const Appoinment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <AppoinmentBanner date={date} setDate = {setDate} ></AppoinmentBanner>
      <AvailableAppoinment date={date} ></AvailableAppoinment>
      <Footer></Footer>
    </div>
  );
};

export default Appoinment;
