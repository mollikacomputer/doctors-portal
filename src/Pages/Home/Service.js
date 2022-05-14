import React from "react";

const Service = ({ service }) => {
  return (
    <div>
      <div class="card w-96 lg:max-w-lg bg-base-100 shadow-xl my-16">
      <figure>
            <img src={service.img} alt="Shoes" className="rounded-xl w-24" />
          </figure>

        <div class="card-body ">
          <div className="items-center text-center">
            <h2 class="text-2xl"> {service.name} </h2>
            <p>{service.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
