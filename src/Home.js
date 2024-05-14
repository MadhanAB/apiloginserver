import axios from 'axios';
import React, { useState ,useEffect} from 'react'


const Home = () => {
  const [userdata,setuserdata]=useState([])


axios.defaults.withCredentials = true;
const getusers = axios.get("http://localhost:8220/api/v1/Myprofile")

.then((response)=>{
 setuserdata(response.data.data);
})
useEffect(()=>{
   getusers()
},[])
  return (
    <div>welcome subash{console.log("datas",userdata)}</div>
  )
}

export default Home