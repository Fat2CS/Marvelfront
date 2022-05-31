import "./scss/signup.scss";
import { useState, useEffect } from "react";

import axios from "axios";

const Signup = ({ handleToken }) => {
  const [data, setData] = useState();
  const [isloading, setIsLoading] = useState(true);
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handlesubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:4001/signup`,

        {
          email: email,
          username: username,
          password: password
        }
      );
      console.log(response.data);

      handleToken(response.data.token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="signup-container" onSubmit={handlesubmit}>
      <h1> inscris-toi </h1>

      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(event) => {
          setemail(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="motdepasse"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <input type="submit" value="sinscrire" />
    </form>
  );
};

export default Signup;
