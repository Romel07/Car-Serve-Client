import React from 'react';
import m1 from '../../../images/m1.jpg'
import m2 from '../../../images/m2.jpg'
import m3 from '../../../images/m3.jpg'
import m4 from '../../../images/m4.jpg'
import m5 from '../../../images/m5.jpg'

const OurTeam = () => {
    return (
        <div className='container-fluid mb-5'>
            <h2 className='text-center my-5 '>Our Experts</h2>
            <div className='row justify-content-center'>
                <div className="card col-md-3 border-0" style={{ width: "12rem", }}>
                    <img className="card-img-top rounded" style={{ height: "12rem", }} src={m1} />
                    <div className="card-body">
                        <h6 className="card-title text-center">William Robinson</h6>
                        <p className="card-text text-center">Auto Doc Manager <br /> <small> Mobile : 874795525</small> </p>
                    </div>
                </div>
                <div className="card col-md-3 border-0" style={{ width: "12rem", }}>
                    <img className="card-img-top rounded" style={{ height: "12rem", }} src={m2} />
                    <div className="card-body">
                        <h6 className="card-title text-center">Bret Corner</h6>
                        <p className="card-text text-center">Auto Doc Manager <br /> <small> Mobile : 874795521</small> </p>
                    </div>
                </div>
                <div className="card col-md-3 border-0" style={{ width: "12rem", }}>
                    <img className="card-img-top rounded" style={{ height: "12rem", }} src={m3} />
                    <div className="card-body">
                        <h6 className="card-title text-center">Alexander Jason</h6>
                        <p className="card-text text-center">Auto Doc Manager <br /> <small> Mobile : 874795522</small> </p>
                    </div>
                </div>
                <div className="card col-md-3 border-0" style={{ width: "12rem", }}>
                    <img className="card-img-top rounded" style={{ height: "12rem", }} src={m4} />
                    <div className="card-body">
                        <h6 className="card-title text-center">Victor Morgan</h6>
                        <p className="card-text text-center">Auto Doc Manager <br /> <small> Mobile : 874795523</small> </p>
                    </div>
                </div>
                <div className="card col-md-3 border-0" style={{ width: "12rem", }}>
                    <img className="card-img-top rounded" style={{ height: "12rem", }} src={m5} />
                    <div className="card-body">
                        <h6 className="card-title text-center">William Robinson</h6>
                        <p className="card-text text-center">Auto Doc Manager <br /> <small> Mobile : 874795524</small> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;