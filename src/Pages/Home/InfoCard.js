import React from "react";

const InfoCard = ({ img, title, desc, bgClass }) => {
  return (
    <div class= {`card lg:max-w-lg bg-neutral text-primary-content ${bgClass}`} >
      <div class="card-body ">
        <div className="flex center ">
          <div className="mr-5 ">
            <img src={img} alt="image" />
          </div>
          <div className="text-left">
            <h2 class="card-title">{title}</h2>
            <p>{desc} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
