import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
    const [data,setData] =useState([])
    // Fetching the data of that particular id and store the data in the data-state so that we can use the data outside the useEffect function, in the component
    // useEffectil thanne json serveril ninnum data fetch cheyan ulla api call kodukkanam.karanam useEffectil kodukkunath vazhi Home component open aayi varumbol thanne data fetch cheythath tablelil display aavum.
    useEffect(()=>{
        axios.get("https://crudappserver-4ul1.onrender.com/users")
        .then(res=>setData(res.data))// responseinte i.e res inte data enna keyil aan sherikum json serveril ninnumula array ullath.ath nammal .then(res=>console.log(res)) vech resine console cheyth nokkiyal kittum

        .catch(err=>console.log(err))
    },[])
    // To delete the data from json server with displaying a dialog box of confirmation.
    //When window.confirm() is called, it opens a dialog box with a message provided as an argument.
    //The dialog box displays two buttons: "OK" and "Cancel".
    //If the user clicks "OK", the function returns true. If the user clicks "Cancel", it returns false.i.e window.confirm() returns a boolean value
    const handleDelete = (id) =>{
    const confirmation = window.confirm("Do you like to Delete?")
    if(confirmation){
        axios.delete((`https://crudappserver-4ul1.onrender.com/users/${id}`)) 
    .then(res=>
        alert("Record Successfully deleted"))
    .catch(err=>console.log(err)) 
     navigate('/')
    } 
    }
    
  return (
    <div className='container mt-5 '>
        <h2 style={{textAlign:"center"}}>Employee List</h2>
            <Link to= "/create"  className='btn btn-success'>Create +</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th >Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d,i)=> (//.map((a)=>()) mapinte ee First and Third ()esinte ullil venam <tr></tr> varan
                    <tr key={i}>
                         <td>{d.id}</td>
                         <td>{d.name}</td>
                         <td>{d.email}</td>
                         <td>
                            {/* to={`/update/${d.id}`} means whenever we clicks the Update link of a particular employee on the "Home" component,it redirects to the "Update" component with the id of that employee so that we can update the details of that employee using the id we pass through the url to the "Update" component*/}
                            {/*  when a user clicks the "Update" Link, they are taken to a URL with a dynamic id parameter. The Route component(in App.js) is set up to match URLs with this pattern i.e  <Route path='/update/:id' element={<Update/>}></Route>, and when a match is found, it renders the Update component. The id parameter is then available within the Update component, allowing you to use it using useParams hook from react-router dom, to fetch and update the corresponding data */}
                            <div className='d-flex justify-content-between'>
                                <Link to={`/update/${d.id}`} className='btn btn-primary'>Update</Link>
                                <button onClick={()=>handleDelete(d.id)} className='btn btn-secondary'>Delete</button>
                                <Link to={`/read/${d.id}`} className='btn btn-info'>Read</Link>
                            </div>
                         </td>
                     </tr>
     
                    ))}
                    
                </tbody>
    
            </table>
       </div>
        

  )
}

export default Home