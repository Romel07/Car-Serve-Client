import React from 'react';
import Header from '../Header/Header';
import HowWeWork from '../HowWeWork/HowWeWork';
import Navbar from '../Navbar/Navbar';
import OurTeam from '../OurTeam/OurTeam';
import Service from '../Service/Service';
import Testimonial from '../Testimonial/Testimonial';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Service></Service>
            <HowWeWork></HowWeWork>
            <OurTeam></OurTeam>
            <Testimonial></Testimonial>
            <Footer></Footer>            
        </div>
    );
};

export default Home;