import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppoinment = ({date}) => {
    const [services, setServices] = useState([]);

    const [treatment, setTreatment] = useState(null);

    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(data => data.json() )
        .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h2 className='text-3xl text-primary' > 
            Available Appoinment Date 
            {format(date, 'PP')} </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-16'>
            {
                services.map( service => <Service
                key={service._id}
                service = {service}
                setTreatment ={setTreatment}
                > 
                   
                </Service>)
            }
            </div>
            { 
            treatment && <BookingModal 
            date = {date}
            treatment = {treatment} 
            setTreatment={setTreatment} 
            ></BookingModal> 
            }
        </div>
    );
};

export default AvailableAppoinment;