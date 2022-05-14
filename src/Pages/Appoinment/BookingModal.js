import { format } from "date-fns";
import React from "react";

const BookingModal = ({ date, treatment, setTreatment }) => {
  const { _id, name, slots } = treatment;

  const handleBooking = event =>{
   event.preventDefault();
   const slot = event.target.slot.value;
   console.log(_id, name, slot);
   setTreatment(null);
  }

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">Booking for : {name}</h3>
          <form 
          onSubmit={handleBooking} 
          className="grid grid-cols-1 gap-4 justify-items-center mt-4">
            <input
              type="text"
              class="input w-full input-bordered max-w-xs"
              value={format(date, "PP")}
              readOnly
            />
            <select name="slot" class="select select-bordered w-full max-w-xs">
              {
                slots.map( slot => <option value={slot} > {slot} </option>)
              }

            </select>
            <input
              type="text"
              name="name"
              placeholder="Your Name Ranjit Kumar Mandal"
              class="input w-full input-bordered max-w-xs"
            />
            <input
              type="email"
              name="email"
              placeholder="mollikacomputer3@gmail.com"
              class="input w-full input-bordered max-w-xs"
            />
            <input
              type="number"
              name="phone"
              placeholder="01914924473"
              class="input w-full input-bordered max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              class="btn btn-secondary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
