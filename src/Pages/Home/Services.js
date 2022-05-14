import React from "react";
import Service from "./Service";
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';

const Services = () => {
   const services = [
        {_id: 1, name: 'Fluoride Treatment', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, incidunt!', img: fluoride },
        {_id: 2, name: 'Cavity Filling', description: 'Lorem ipsm dolor sit amet consectetur adipisicing elit. In, incidunt!', img: cavity },
        {_id: 3, name: 'Teeth Whitening', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, incidunt!', img: whitening }
    ]
  return (
    <div className="my-16">
      <div className="my-16">
        <h3 className="text-3xl text-primary uppercase"> services</h3>
        <h2 className="text-5xl uppercase "> Services We Provide </h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-16" >
        {
            services.map( service => <Service
            key={service._id}
            service={service}
            > </Service>)
        }
      </div>
    </div>
  );
};

export default Services;
