import axios from "axios";

import { useState } from "react";
import Layout from "./Layout";
// import { useNavigate } from "react-router-dom";
import "./scss/login.scss";
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  //   const [username, setUsername] = useState();

  const handlesubmit = async (event) => {
    event.preventDefault();

    // if (handleToken) {
    try {
      const response = await axios.post(
        // `http://localhost:4001/login`,

        `https://marvelprocess.herokuapp.com/login`,

        {
          email: email,

          password: password
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    // } else {
  };
  return (
    <>
      <Layout>
        <form className="signup-container" onSubmit={handlesubmit}>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />

          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <input type="submit" value="Connexion" />
        </form>
      </Layout>
    </>
  );
};
export default Login;
