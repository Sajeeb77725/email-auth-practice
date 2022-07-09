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

  return (
    <div className="App">
      <form>
        <input onBlur={handleEmailFeild} type="email" name="" id="" />
        <input onBlur={handlePassFeild} type="password" name="" id="" />
      </form>
    </div>
  );
}

export default App;
