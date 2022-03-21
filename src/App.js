// import SignUp from "./components/SignUp";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Faculty from "./components/Faculty";
import Students from "./components/Students";
import Matches from "./components/Matches";
import Events from "./components/Events";

function App() {
  return (
    <Routes>
      <Route path="" element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="faculty" element={<Faculty />} />
      <Route path="students" element={<Students />} />
      <Route path="matches" element={<Matches />} />
      <Route path="events" element={<Events />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>404 Error: Page Not Found</p>
          </main>
        }
      />
    </Routes>
  );
}

export default App;
