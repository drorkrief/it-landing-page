import { useState } from "react";
import "../style/Form.css";

export default function Form() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
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
            type="text"
            name="username"
            value={inputs.username || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>סיסמה</span>
          <input
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
