import "./App.css";
import Options from "./components/Options.js";
import RegisterJWT from "./components/RegisterJWT";
import ProtectedRoute from "./components/ProtectedRoute";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginContext } from "./context/LoginContext";
import LoginJWT from './components/LoginJWT'
import { useState } from "react";
function App() {
  const [username, setUsername] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <LoginContext.Provider
      value={{ username, setUsername, selectedOption, setSelectedOption }}
    >
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Options />}></Route>

            <Route exact path="/jwt/register" element={<RegisterJWT />}></Route>
            <Route exact path="/protected" element={<ProtectedRoute />}></Route>
            <Route exact path="/jwt/login" element={<LoginJWT />}></Route>
          </Routes>
        </div>
      </Router>
    </LoginContext.Provider>
  );
}

export default App;
