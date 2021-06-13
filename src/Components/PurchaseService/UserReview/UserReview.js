import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import UserLink from '../UserLink/UserLink';



const UserReview = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  // const [serviceURL, setServiceURL] = useState(null)
  const [userImage, setUserImage] = useState(null)

  const handleUserImage = event => {
    // console.log(event);
    const imageData = new FormData();
    imageData.set('key', 'b80fddd44f7eb65e24aefe751043d7aa')
    imageData.append('image', event.target.files[0])

    axios.post('https://api.imgbb.com/1/upload', imageData)
    .then(function (response) {
      setUserImage(response.data.data.display_url);
    })
    .catch(function (error) {
      console.log(error);
    });

     console.log(event.target.files[0])
  }

  const onSubmit = data => {
    const eventData = {
      name : data.userName,
      address: data.userAddress,
      review: data.userReview,
      userImage : userImage,
    }
    console.log(eventData);
    fetch('https://agile-mesa-34540.herokuapp.com/addReview',{ 
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(eventData)
    })
    .then(response => response.json())
    .then(success => {
      if(success){
        alert('Review Added Successfully.')
      }
    });
  };

  console.log(errors);

    return (
        <div className='row'>
        <Navbar></Navbar>
        <UserLink></UserLink>
  
        <div className="col-md-10 border AdminStyle">
        <h1 className='text-white pt-4'>Review</h1>

        <form onSubmit={handleSubmit(onSubmit) }  style={{minWidth:'400px', marginTop:'3em'}}>
          <span >Name : </span>
          <input type="text" placeholder="Your Name" {...register("userName", { required: true })} /> <br/> <br/>
          <span >Address : </span>
          <input type="text" placeholder="Your Address" {...register("userAddress", { required: true })} /> <br/> <br/>
          <span>Review : </span>
          <textarea placeholder="Your Review" {...register("userReview", { required: true })} /> <br/> <br/>
          <span >User Image : </span>
          <input type="file" placeholder="user Image" onChange={handleUserImage}/> <br/> <br/>

          

          <input type="submit" />
        </form>
      </div>
  
      </div>
    );
};

export default UserReview;