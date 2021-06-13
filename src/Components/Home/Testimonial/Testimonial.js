import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Testimonial = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://agile-mesa-34540.herokuapp.com/reviews')

            .then(res => res.json())
            .then(data => setReviews(data))


    }, [])
    return (
        <div className='container pb-5' style={{ backgroundColor: '#F6F5F5' }}>
            <div className="row d-flex justify-content-center" >
                <h3 className="text-center my-4 pb-5">What Our Client Say To us</h3>

                {
                    reviews.map(review =>
                        <div className="col-md-4 col-xs-12 mb-3 mx-2 text-center" style={{ backgroundColor: '#625856', width: '30%', height: '15em' }}>
                            <img className='mb-3 mt-2 rounded-circle' style={{ width: '5em', height: '5em', position: 'arlative', transform: 'translateY(-100)', zIndex: '5' }} src={review.userImage
                            } alt="" />
                            <div className=''>
                                <small className='text-center text-white'>{review.review
                                }</small>
                                <p className='text-center text-white mt-3'>{review.name
                                }</p>
                            </div>
                        </div>
                    )
                }

            </div>

        </div>
    );
};

export default Testimonial;