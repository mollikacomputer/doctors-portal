import React from "react";
import Appoinment from '../../assets/images/appointment.png';

const ContactUs = () => {
  return (
    <div className="my-32 p-32 " style={{
        background: `url(${Appoinment})`,
        backgroundSize: 'cover'
    }} >
      <input
        type="email"
        placeholder="Type Your Email"
        className="input input-bordered w-full lg:w-1/2"
      /> <br/><br/>
      <input
        type="text"
        placeholder="Type Subject"
        className="input input-bordered w-full lg:w-1/2"
      /><br/><br/>
      <textarea 
      class="textarea w-full lg:w-1/2" 
      placeholder="Message"></textarea><br/><br/>
      <input type="submit" value="submit" className="btn btn-primary" />
    </div>
  );
};

export default ContactUs;
