import React from 'react';
import Banner from '../Banner';
import Footer from '../Common/Footer';
import ContactUs from './ContactUs';
import DentalCare from './DentalCare';
import Info from './Info';
import MakeAppoinment from './MakeAppoinment';
import Services from './Services';
import Testimonials from './Testimonials';


const Home = () => {
    return (
        <div className='' >
            <div className="mx-16">
            <Banner></Banner>
            <Info></Info>
            </div>
            <div className="mx-16">
            <Services></Services>
            <DentalCare></DentalCare>
            </div>
            <MakeAppoinment></MakeAppoinment>
            <div className="mx-16">
                
            </div>
            <div className="mx-16">
            <Testimonials></Testimonials>
            </div>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;