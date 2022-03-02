import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./Register";
import Login from "./Login";
import Members from "./Members";
import LoginSuccess from "./LoginSuccess";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="menu">
          <Link className="link" to="/register">Register</Link>
          <Link className="link" to="/login">Login</Link>
          <Link className="link" to="/members">Members</Link>
        </div>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/members" element={<Members />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
