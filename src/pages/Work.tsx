import React from "react";
import { Route } from "react-router-dom";
import Project from "./Project";

export default ({ match }: any) => {
  return (
    <div>
      <Route path={`${match.path}/:projectId`} component={Project} />
      <div className="portfolio">
        <h1 className="portfolio-title">Previous Work</h1>
        <ol className="portfolio-items">
          <li className="portfolio-item first-work">
            <div className="portfolio-item-text">
              <h2>Humble Beginnings</h2>
              <p>A man's first foray into webdev. AKA this website.</p>
            </div>
          </li>
          <li className="portfolio-item next-work">
            <div className="portfolio-item-text">
              <h2>What's Next?</h2>
              <p>So the world might be mended...</p>
            </div>
          </li>
        </ol>
      </div>

      <div className="cta-btn">
        <a className="cta-link">Get In Touch</a>
      </div>
    </div>
  );
};
