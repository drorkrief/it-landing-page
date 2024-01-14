import {useEffect, useRef} from 'react'
import axios from 'axios';

export const UserDetected = ({query}) => {
  const userRan = useRef(false);
    useEffect(() => {
      // console.log(btoa("dror@gmail.co.il"));// encoded
      const decodedText = atob(query)// decoded
      // axios.post('http://localhost:3033/used_link', {
        if (userRan.current === false) {
      axios.post('https://login-logout-api.onrender.com/used_link', {
        decodedText
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      return () => {
        userRan.current = true;
      }
    }
    
    }, [])
    
  return (
    null
  )
}
