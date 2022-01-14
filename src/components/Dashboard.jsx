import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import Navbar from "./Navbar";

import "./static/Dashboard.css";

export default function Dashboard() {
  var count = {
    events: 1,
    matches: 2,
    students: 3,
    sports: 4,
  };
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
