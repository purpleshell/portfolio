import React from "react";
import gabe from "../images/gabe.png";
export default () => {
  return (
    <>
      <div className="about">
        <img className="about-photo " src={gabe} alt="Picture of Gabe" />
        <div className="about-txt">
          <h2 className="mini-intro primary">I like typescript...</h2>
          <h1 className="intro">
            Hi, I'm <span className="primary">Mychal</span>
          </h1>
          <div className="about-description">
            <p>
              If I'm not busy making a website or spending time with my family,
              it probably means im off coding something cool, learning some new
              tech, doing some resistance training or cooking up some plant
              based goodness.
            </p>
            <p>
              Looking to expand your brand's online footprint? You've come to
              the right place!
            </p>
          </div>
          <div className="cta-btn">
            <a className="cta-link" href="mailto:admin@purpleshell.xyz">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
