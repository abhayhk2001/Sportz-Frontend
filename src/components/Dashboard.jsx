import React from "react";
import Navbar from "./Navbar";
import Login from "./Login";

function getToken() {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken;
}

function Dashboard() {
  const token = getToken();
  console.log(token);
  if (!token) {
    return <Login />;
  }
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default Dashboard;
