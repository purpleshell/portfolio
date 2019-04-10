import React from "react";
import { Link, Route } from "react-router-dom";
import Project from "./Project";

export default ({ match }: any) => {
  return (
    <div>
      <Route path={`${match.path}/:projectId`} component={Project} />
      <Route exact path={match.path} component={WorkNav} />
    </div>
  );
};

const WorkNav = ({ match }: any) => {
  return (
    <>
      <h2>Projects</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>
    </>
  );
};
