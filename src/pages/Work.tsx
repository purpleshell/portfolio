import React from "react";
import { Route } from "react-router-dom";
import Project from "./Project";

export default ({ match }: any) => {
  return (
    <div>
      <Route path={`${match.path}/:projectId`} component={Project} />
      <h2>Projects</h2>
    </div>
  );
};
