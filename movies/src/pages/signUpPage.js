import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';

const SignUpPage = props => {
  const context = useContext(AuthContext)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [registered, setRegistered] = useState(false);

  const register = () => {
    if (password.length > 0 && password === passwordAgain) {
      context.register(userName, password);
      setRegistered(true);
    }
  }

  if (registered === true) {
    return <Navigate to="/login" />;
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>SignUp page</h2>
      <p>You must register a username and password to log in</p>
      <input
        style={styles.input}
        value={userName}
        placeholder="Username"
        onChange={e => setUserName(e.target.value)}
      /><br />
      <input
        style={styles.input}
        value={password}
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      /><br />
      <input
        style={styles.input}
        value={passwordAgain}
        type="password"
        placeholder="Password again"
        onChange={e => setPasswordAgain(e.target.value)}
      /><br />
      <button style={styles.button} onClick={register}>Register</button>
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

export default SignUpPage;
