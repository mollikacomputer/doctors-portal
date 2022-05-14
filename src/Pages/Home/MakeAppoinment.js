import React from "react";
import Doctor from "../../assets/images/doctor.png";
import appoinmentBgImg from "../../assets/images/appointment.png";

const MakeAppoinment = () => {
  return (
    <div
      class="hero min-h-screen "
      style={{
        background: `url(${appoinmentBgImg})`,
      }}
      className="flex justify-center items-center my-16"
    >
      <div class="hero-content flex-col lg:flex-row">
        <div className=" hidden lg:block">
          <img
            src={Doctor}
            alt="doctors img"
            className="mt-[-100px] mb-[-16px]"
          />
        </div>
        <div className="">
          <h1 class="text-5xl font-bold text-white">
            Make an appointment Today{" "}
          </h1>
          <p class="py-6 text-white">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default MakeAppoinment;
