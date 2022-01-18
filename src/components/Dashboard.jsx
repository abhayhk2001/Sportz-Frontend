import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import Navbar from "./Navbar";
import axios from "axios";
import "./static/Dashboard.css";

export default function Dashboard() {
  const [count, setCount] = useState({});

  useEffect(() => {
    fetchData();
  }, []);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = () => {
    setIsLoading(true);
    axios.get("http://127.0.0.1:8000/api/admin/countinfo").then((response) => {
      console.log(response.data);
      setCount(response.data);
      setIsLoading(false);
    });
  };
  if (isLoading) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }
  return (
    <>
      <Navbar />
      <div className="main-container">
        <div className="card-container">
          <Card>
            <CardContent className="card">
              <Typography variant="h4" component="div">
                Matches
              </Typography>
              <Typography variant="h5" component="div">
                {count.matches}
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="card-container">
          <Card>
            <CardContent className="card">
              <Typography variant="h4" component="div">
                Events
              </Typography>
              <Typography variant="h5" component="div">
                {count.events}
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="card-container">
          <Card>
            <CardContent className="card">
              <Typography variant="h4" component="div">
                Students
              </Typography>
              <Typography variant="h5" component="div">
                {count.students}
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="card-container">
          <Card>
            <CardContent className="card">
              <Typography variant="h4" component="div">
                Sports
              </Typography>
              <Typography variant="h5" component="div">
                {count.sports}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
