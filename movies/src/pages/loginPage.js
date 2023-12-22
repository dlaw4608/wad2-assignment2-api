import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/authContext";
import { Link } from "react-router-dom";

const LoginPage = (props) => {
  const context = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    context.authenticate(userName, password);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login page</h2>
      <p>You must log in to view the protected pages</p>
      <input
        style={styles.input}
        id="username"
        placeholder="Username"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <br />
      <input
        style={styles.input}
        id="password"
        type="password"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <button style={styles.button} onClick={login}>
        Log in
      </button>
      <p>
        Not Registered? <Link to="/signup">Sign Up!</Link>
      </p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    maxWidth: "300px",
    margin: "auto",
    marginTop: "50px",
  },
  title: {
    fontSize: "1.5em",
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default LoginPage;
