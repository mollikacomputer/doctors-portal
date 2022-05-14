import React from 'react';
import InfoCard from './InfoCard';
import clock from "../../assets/icons/clock.svg";
import location from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
const Info = () => {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-16' >
            
            <InfoCard
            bgClass="bg-gradient-to-r from-secondary to-primary"
            img = {clock}
            title = 'Opening Hours'
            desc = '7.00 am to 1.00pm and 2 hrs prayer and lunch hour then 3.00 am to 8.00pm'
            >

            </InfoCard>

            <InfoCard
            bgClass="bg-secondary text-white"
            img = {location}
            title = "Visit our Location"
            desc = " 7.30 am to 1.00pm and 5.00pm to 8.00pm"
            ></InfoCard>

            <InfoCard
            bgClass="bg-gradient-to-r from-secondary to-primary"
             img = {phone}
             title = "Contact Us now"
             desc = " 01914924473"
            ></InfoCard>
        </div>
    );
};

export default Info;