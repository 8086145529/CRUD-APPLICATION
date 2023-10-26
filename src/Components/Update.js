

import axios from 'axios';
import React from 'react'
import { useEffect , useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


 //On using useParams hook, the key in the object returned by useParams() will match the parameter name you defined in your route,i.e <Route path='/update/:id' element={<Update/>}></Route>.since the url passed in the <Link> tag is `/update/${d.id}`,we get the value for the "id" key on comparison between this two paths

function Update() {

  //To defaultly get the detail of the specific person on the update component's input,first we need to get the id in this component through useParams() hook.Then we can get the data of that particular person using axios api calling through the id we get. 

    const {id} = useParams();// The id in {id} is the id we mentioned in the Route's path in App.js

    const [inputData, setInputData] = useState({ // We create this kind of useState with an object with keys , in cases were the data we enter on input box on updating should store in the json server
        id: id,
        name: '',
        email: ''
    })
    const navigate = useNavigate();

      //Fetching the data  of that particular id and store the data in the data-state so that we can use the data outside the useEffect function, in the component
     // useEffect is used so that we can get the data only once on first mounting of the component
    useEffect(() => { // we use this kind of functions to get the datas of a particular person from json server to defaultly shown in the input box,when the update componet opens
        axios.get('https://crudappserver-4ul1.onrender.com/users/'+id)// In this kind of api calling for a specific id we need to give a '/' in the url inorder to add the id in the url.OR use `http://localhost:4000/users/${id}` 
        .then(res => setInputData(res.data)) // responseinte i.e res inte data enna keyil aan sherikum json serveril ninnumula array ullath.ath nammal .then(res=>console.log(res)) vech resine console cheyth nokkiyal kittum

        .catch(err => console.log(err))
    }, [])
    // Updating the data of that specific id through put request on submitting the form 
    const handleSubmit = (event) => { // we use this kind of functions to update the data of that person on the json server with data stored in inputData
        event.preventDefault();
        axios.put('https://crudappserver-4ul1.onrender.com/users/'+id , inputData)
        .then(res => {
            alert("Data Updated Successfully!")
            navigate('/')
        })
    }


  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id">ID:</label>
                    {/* we disabled the input box with a default value of the corresponding person's id */}
                    <input disabled type="number" name='id' className='form-control' value={inputData.id}
                    /> 
                </div>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name='name' className='form-control' value={inputData.name}
                    onChange={e => setInputData({...inputData, name: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name='email' className='form-control' value={inputData.email}
                    onChange={e => setInputData({...inputData, email: e.target.value})}/>
                </div><br />
                <button className='btn btn-info'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default Update
