import React from 'react';
import keys from '../../../images/keys.jpg'
import carserv from '../../../images/car-serv.jpg'
import appoint from '../../../images/appoint (2).jpg'
import appo from '../../../images/appointment.png'
import serv from '../../../images/serv1.png'

const HowWeWork = () => {
    return (
        <div className='container mt-5 pt-3 mx-auto'>
            <h2 className='text-center'>How It Works</h2>
            <h5 className='text-center mb-5'>These few steps will help return your car to a working condition</h5>
            <div className='row'>

            <div className="card col-6 col-md-3  mt-2 border-0" style={{ width: "15rem" }}>
                    <img className="card-img-top rounded-circle w-75"  src={serv} />
                    <div className="card-body">
                        <p className="card-title text-center">Choose Your Service</p>
                    </div>
                </div>

                <div className="card col-6 col-md-3  mt-2 border-0" style={{ width: "15rem" }}>
                    <img className="card-img-top rounded-circle  w-75"  src={appo} />
                    <div className="card-body">
                        <p className="card-title text-center">Make an Appointment</p>
                    </div>
                </div>
                <div className="card col-6 col-md-3  mt-2 border-0" style={{ width: "15rem" }}>
                    <img className="card-img-top rounded-circle  w-75 "  src={carserv} />
                    <div className="card-body">
                        <p className="card-title">We'll take Your Car for Repair</p>
                    </div>
                </div>
                <div className="card col-6 col-md-3  mt-2 border-0" style={{ width: "15rem" }}>
                    <img className="card-img-top rounded-circle  w-75 "  src={keys} />
                    <div className="card-body">
                        <p className="card-title">Pick up your Car Keys</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HowWeWork;