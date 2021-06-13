import React from 'react';

const Footer = () => {
    return (
        <div className='container py-5 mt-3 text-dark' style={{backgroundColor:'#A1A1A1'}}>
            <did className="row">
                <div className="col-md-3 col-6  px-5 mx- 3">
                    <h5 className='mb-3'>Socials</h5>
                    <p>Facebook</p>
                    <p>Google</p>
                    <p>YouTube</p>
                    <p>Linkedin</p>
                    <p>Twitter</p>
                </div>
                <div className="col-md-3 col-6">
                <div className="col-md-3 col-6  px-5 mx- 3">
                    <h5 className='mb-3'>Vehicle</h5>
                    <p>BATMOBILE</p>
                    <p>HOVER-CLERKSON</p>
                    <p>GNB</p>
                    <p>RTEROMOBILE</p>
                    <p>THISIUSSHI</p>
                </div>

                </div>
                <div className="col-md-3 col-6">
                <div className="col-md-3 col-6  px-5 mx- 3">
                    <h5 className='mb-3'>SERVICES</h5>
                    <p>BREAK REAPIR</p>
                    <p>ENGINE REPAIR</p>
                    <p>COMPUTER DIGONOSIS</p>
                    <p>MAINTENANCE INSPECTION</p>
                    <p>OIL CHANGE</p>
                </div>
                </div>
                <div className="col-md-3 col-6">
                <div className="col-md-3 col-6  px-5 mx- 3">
                    <h5 className='mb-3'>Open Hours</h5>
                    <p>Monday to Saturday: 8AM- 16AM</p>
                    <p>Sunday: Closed</p>
                </div>
                </div>
            </did>
            
        </div>
    );
};

export default Footer;