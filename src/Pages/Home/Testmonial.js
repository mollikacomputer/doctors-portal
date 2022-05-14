import React from "react";

const Testmonial = ({ review }) => {
  return (
    <div class="card w-96 bg-base-100 shadow-xl p-4">
      <div>
        <p className="text-left" >
          {review.review}
        </p>
      </div>
      <div className="flex">
        <div class="avatar my-8">
          <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={review.img} />
          </div>
        </div>
        <div class="card-body text-left align-middle">
          <h2 class="card-title">{review.name}</h2>
          <p> {review.location} </p>
        </div>
      </div>
    </div>
  );
};

export default Testmonial;
