import React,{useEffect} from 'react'
import axios from 'axios';

export const UserDetected = ({query}) => {
    useEffect(() => {
      // axios.post('http://localhost:3033/used_link', {
      axios.post('https://login-logout-api.onrender.com/used_link', {
        query
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      
    
    }, [])
    
  return (
    null
  )
}
