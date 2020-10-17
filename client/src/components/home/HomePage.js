import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>ComCore Projects Administration</h1>
    <p>React, Redux and React Router for ultra-responsive web app</p>
    <p>Node, Express, Mongo DB and Python for backend Data collection and hosting</p>
    <Link to="projects" className="btn btn-primary btn-lg">
      Go to Projects
    </Link>
  </div>
);

export default HomePage;
