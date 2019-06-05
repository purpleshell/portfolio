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
          <li className="portfolio-item overload">
            <a href="https://overload-client.herokuapp.com/exercises">
              <div className="portfolio-item-text-bg">
                <div className="portfolio-item-text">
                  <h2>Overload</h2>
                  <p>
                    A full-stack React/TypeScript PWA I single handedly took
                    from inception through design and into implementation. It is
                    intednded to function as a personal database for users to
                    log their resistance training progress.
                  </p>
                </div>
              </div>
            </a>
          </li>
          {/* <li className="portfolio-item grid-example">
            <a href="https://seenyx.herokuapp.com">
              <div className="portfolio-item-text-bg">
                <div className="portfolio-item-text">
                  <h2>CSS Grid Example</h2>
                  <p>
                    A quick client-side only demo of a mock storefront delivery
                    service, designed by a friend.
                  </p>
                </div>
              </div>
            </a>
          </li>
          <li className="portfolio-item vaster">
            <a href="https://serene-brown-68227f.netlify.com/">
              <div className="portfolio-item-text-bg">
                <div className="portfolio-item-text">
                  <h2>Vaster</h2>
                  <p>
                    Completely from scratch React/TypeScript PWA. Responsive
                    mobile/desktop design using the antd library. Current
                    functionalities include: account registration, log-in,
                    forgot password and a mock storefront using RandomUser
                    public API.
                  </p>
                </div>
              </div>
            </a>
          </li> */}
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
        </ol>
      </div>

      <div className="cta-btn">
        <a className="cta-link" href="mailto:admin@purpleshell.xyz">
          Hire Me
        </a>
      </div>
    </>
  );
};
