import React from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import AdminLink from '../AdminLink/AdminLink';
import { useForm } from 'react-hook-form';
import './Admin.css';
import axios from 'axios';
import { useState } from 'react';


const Admin = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [serviceURL, setServiceURL] = useState(null)

  const handleImageUpload = event => {
    const imageData = new FormData();
    imageData.set('key', 'b80fddd44f7eb65e24aefe751043d7aa')
    imageData.append('image', event.target.files[0])

    axios.post('https://api.imgbb.com/1/upload', imageData)
    .then(function (response) {
      setServiceURL(response.data.data.display_url);
    })
    .catch(function (error) {
      console.log(error);
    });


     console.log(event.target.files[0])
  }
  
  const onSubmit = data =>{
    const eventData = {
      service : data.serviceTitle,
      description: data.serviceDescription,
      serviceURL : serviceURL
    }
    console.log(eventData);
    fetch('https://agile-mesa-34540.herokuapp.com/addService',{ 
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(eventData)
    })
    .then(response => response.json())
    .then(success => {
      if(success){
        alert('New Service Added Successfully.')
      }
    });
  };
  console.log(errors);


  return (

    <div className='row'>
      <Navbar></Navbar>
      <AdminLink></AdminLink>

      <div className="col-md-10 border AdminStyle">
        <h1 className='text-white pt-4'>  Add New Car Service</h1>

        <form onSubmit={handleSubmit(onSubmit) }  style={{minWidth:'300px', marginTop:'3em'}}>
          <span >Service : </span>
          <input type="text" placeholder="Service Title" {...register("serviceTitle", { required: true })} /> <br/> <br/>
          <span>Description : </span>
          <textarea placeholder="Service Title" {...register("serviceDescription", { required: true })} /> <br/> <br/>
          <span>Price ($US) : </span>
          <input type="number" placeholder="number" {...register("number", {required: true})} /> <br/> <br/>
          <span >Service Image : </span>
          <input type="file" placeholder="Service Image" onChange={handleImageUpload}/> <br/> <br/>

          <input type="submit" />
        </form>
      </div>

    </div>
  );
};

export default Admin;

//  {...register("serviceImage", { required: true })}