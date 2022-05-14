import React from "react";

const Service = ({ service, setTreatment }) => {
  const { slots, name} = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl ">
      <div className="card-body justify-center">
        <h2 className="card-title justify-center text-secondary">{name} </h2>
        <p>
          {slots.length > 0 ? (
            <span> {slots[0]} </span>
          ) : (
            <span className="text-red-500"> Try Another Date </span>
          )}
        </p>
        <p>
          {" "}
          {slots.length} {slots.length > 1 ? "services" : "service"} available
        </p>
        <div className="card-actions justify-center">
          <label
          disabled={slots.length === 0}
          for="booking-modal" 
          className=" btn btn-secondary"
          onClick={()=> setTreatment(service)}
          >
          Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
