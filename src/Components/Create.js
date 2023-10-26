import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Create() {
    const navigate = useNavigate()
    const [inputData,setInputData] = useState({
        name:'',
        email:''
    })
    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post("https://crudappserver-4ul1.onrender.com/users",inputData)
        .then(res=>{
            alert("Data Saved Successfully!")
            navigate("/")

        })
    }
  return (
    
   <div  className='d-flex justify-content-center align-items-center flex-column '>
    <h2 className='mt-5'>Employee Details</h2>
        <Form onSubmit={handleSubmit} style={{width:'50rem',marginTop:'3rem'}} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control onChange={(e)=>setInputData({...inputData,name: e.target.value})}  style={{border:'solid grey'}} type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={(e)=>setInputData({...inputData,email: e.target.value})}  style={{border:'solid grey'}} type="email" placeholder="Enter email" />
        </Form.Group>
        <Button className='btn btn-info' type="submit">
          Submit
        </Button>
      </Form>
   </div>
  )
}

export default Create