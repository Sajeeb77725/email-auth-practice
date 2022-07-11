import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAuth,
} from "firebase/auth";
import app from "./firebase.init";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useState } from "react";

const auth = getAuth(app);

function App() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [registered, setRegistered] = useState(false);

  const handleEmailFeild = (event) => {
    setEmail(event.target.value);
  };

  const handlePassFeild = (event) => {
    setPass(event.target.value);
  };

  const handleRegistered = (event) => {
    setRegistered(event.target.checked);
  };

  const handleFormSubmit = (event) => {
    if (registered) {
      signInWithEmailAndPassword(auth, email, pass)
        .then((result) => {
          console.log(result.user);
        })
        .catch((error) => {
          setError(error.message);
        });
    } else {
      createUserWithEmailAndPassword(auth, email, pass)
        .then((result) => {
          const user = result.user;
          console.log(user);
          setEmail("");
          setPass("");
        })
        .catch((error) => {
          console.error(error);
          setError(error.message);
        });
    }
    event.preventDefault();
  };

  return (
    <div>
      <div className="register w-50 mx-auto mt-5">
        <h1 className="text-primary">
          Please {registered ? "Log In" : "Register!"}
        </h1>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={handleEmailFeild}
              type="email"
              placeholder="Enter email"
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onBlur={handlePassFeild}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <p>{error}</p>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              onChange={handleRegistered}
              type="checkbox"
              label="Already registered?"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            {registered ? "Log In" : "Register"}
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
