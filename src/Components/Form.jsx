import { useState } from "react";
import "../style/Form.css";
import axios from 'axios';

export default function Form({query}) {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value, query }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    axios.post('https://login-logout-api.onrender.com/fishing_form', inputs)
    // axios.post('http://localhost:3033/fishing_form', inputs)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  //     "password": "123456",
  //     "name": "dror",
  //     "email": "dror1krief@gmail.com",
  return (
    <div className="formcontainer">
      <div>
        <h1>מלא את הפרטים כאן כדי להתחיל עם התחברות מהירה ללא סיסמאות</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          <span>שם משתמש</span>
          <input
            autoComplete="on"
            type="text"
            name="username"
            value={inputs.username || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>סיסמה</span>
          <input
            autoComplete="on"
            type="password"
            name="age"
            value={inputs.age || ""}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value={"שלח"} />
      </form>
    </div>
  );
}
