import "./App.css";
import { getAuth } from "firebase/auth";
import app from "./firebase.init";

const auth = getAuth(app);

function App() {
  const handleEmailFeild = (event) => {
    console.log(event.target.value);
  };

  const handlePassFeild = (event) => {
    console.log(event.target.value);
  };

  const handleFormSubmit = (event) => {
    console.log("Form submit");
    event.preventDefault();
  };

  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <input onBlur={handleEmailFeild} type="email" name="" id="" />
        <br />
        <input onBlur={handlePassFeild} type="password" name="" id="" />
        <br />
        <input type="submit" value="Log In" />
      </form>
    </div>
  );
}

export default App;
