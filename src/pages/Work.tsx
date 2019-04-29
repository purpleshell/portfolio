import React from "react";
import { Route } from "react-router-dom";
import Project from "./Project";

export default ({ match }: any) => {
  return (
    <>
      <Route path={`${match.path}/:projectId`} component={Project} />
      <div className="portfolio">
        <h1 className="portfolio-title">Previous Work</h1>
        <ol className="portfolio-items">
          <li className="portfolio-item first-work">
            <a href="#">
              <div className="portfolio-item-text-bg">
                <div className="portfolio-item-text">
                  <h2>Humble Beginnings (This Web-Site)</h2>
                  <p>
                    My first vanilla HTML/CSS project, which I made for a
                    friend. I improved and ported it to this basic react app.
                    Original files and proof of hand-off available upon request.
                  </p>
                </div>
              </div>
            </a>
          </li>
          <li className="portfolio-item second-work">
            <a href="#">
              <div className="portfolio-item-text-bg">
                <div className="portfolio-item-text">
                  <h2>Humble Beginnings (This Web-Site)</h2>
                  <p>
                    My first vanilla HTML/CSS project, which I made for a
                    friend. I improved and ported it to this basic react app.
                    Original files and proof of hand-off available upon request.
                  </p>
                </div>
              </div>
            </a>
          </li>
          <li className="portfolio-item third-work">
            <a href="#">
              <div className="portfolio-item-text-bg">
                <div className="portfolio-item-text">
                  <h2>Humble Beginnings (This Web-Site)</h2>
                  <p>
                    My first vanilla HTML/CSS project, which I made for a
                    friend. I improved and ported it to this basic react app.
                    Original files and proof of hand-off available upon request.
                  </p>
                </div>
              </div>
            </a>
          </li>
          <li className="portfolio-item fourth-work">
            <a href="#">
              <div className="portfolio-item-text-bg">
                <div className="portfolio-item-text">
                  <h2>Humble Beginnings (This Web-Site)</h2>
                  <p>
                    My first vanilla HTML/CSS project, which I made for a
                    friend. I improved and ported it to this basic react app.
                    Original files and proof of hand-off available upon request.
                  </p>
                </div>
              </div>
            </a>
          </li>
        </ol>
      </div>

      <div className="cta-btn">
        <a className="cta-link">Get In Touch</a>
      </div>
    </>
  );
};
