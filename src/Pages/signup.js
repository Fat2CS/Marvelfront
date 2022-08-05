import "./scss/signup.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import Layout from "./Layout";

console.log("test");
const Signup = ({ handleToken }) => {
  // const [isloading, setIsLoading] = useState(true);
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handlesubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        // `http://localhost:4001/signup`
        `https://marvelprocess.herokuapp.com/signup`,

        {
          email: email,
          username: username,
          password: password
        }
      );
      console.log(response.data);

      handleToken(response.data.token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
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
      </Layout>
    </>
  );
};

export default Signup;
