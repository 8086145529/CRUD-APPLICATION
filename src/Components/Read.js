import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Read() {
  const {id} = useParams()// useParams returns an object of key/value pairs of the dynamic params from the current URL that were matched by the route path.
  
  const [Data,setdata]= useState({})// This object contains object of data of a particular person we get from json server


  useEffect(()=>{
    axios.get('http://localhost:4000/users/'+id)
    .then((res)=>{setdata(res.data)})// setdata(res.data) means , object(datas) (object with 3 key-value pairs) get from the res.data through api calling is stored in Data state that contains an object.
    .catch((err)=>{console.log(err)})
    
  },[])
  return (
       <div className='container p-5'>
          <p>{Data.id}</p>
          <p>{Data.name}</p>
          <p>{Data.email}</p>
          <Link to='/' className='btn btn-info'>Back to Home</Link>
      </div>

    
  )
}

export default Read