import React from "react";
import "./static/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar-container">
      <div className="navigation">
        <Link to="/dashboard">Home</Link>
        <Link to="/students">Students</Link>
        <Link to="/faculty">Faculty</Link>
        <Link to="/events">Events</Link>
        <Link to="/matches">Matches</Link>
      </div>
    </header>
  );
}

export default Navbar;
