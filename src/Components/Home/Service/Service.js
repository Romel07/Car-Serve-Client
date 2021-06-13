import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './service.css'


const Service = () => {
    const [service, setService] = useState([])

    useEffect(() => {
        fetch('https://agile-mesa-34540.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div className='container-fluid'>
            <h2 className='text-center'>What We Do</h2>
            <h5 className='text-center mb-5'>We Offer Full Service Auto Repair & Maintenance</h5>
            <div className='row ms-4 ps-4 hover01'>
                {
                    service.map(oneService =>
                        <div className="card col-12 col-md-3 mx-3 mt-2 shadow " style={{ width: "18rem" }}>
                            <figure><img className="card-img-top pt-2" style={{ width: '16.5em', height: '11em' }} src={oneService.serviceURL} alt="" /></figure>
                            <div className="card-body">
                                <h5 className="card-title text-center">{oneService.service}</h5>
                                <h6 className="card-title text-center">Price $US : </h6>
                                <p className="card-text text-center">{oneService.description}</p>
                                <Link to={`/booking/${oneService.service}`} className="btn btn-primary">Book Service</Link>

                            </div>
                        </div>)
                }
            </div>
        </div>

    );
};

export default Service;