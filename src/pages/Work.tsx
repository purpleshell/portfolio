import React from "react";
import { Link, Route } from "react-router-dom";
import Project from "./Project";

export default ({ match }: any) => {
  return (
    <div>
      <Route path={`${match.path}/:projectId`} component={Project} />
      <h2>Projects</h2>

      <ul>
        <li>
          <Link to={`${match.url}/overload`}>Overload</Link>
        </li>
        <li>
          <Link to={`${match.url}/vaster`}>Vaster</Link>
        </li>
        <li>
          <Link to={`${match.url}/this-site`}>This Site</Link>
        </li>
        <li>
          <Link to={`${match.url}/gabe`}>Gabe</Link>
        </li>
        <li>
          <Link to={`${match.url}/blog`}>Blog</Link>
        </li>
      </ul>
    </div>
  );
};
