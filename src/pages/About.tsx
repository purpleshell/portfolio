import React from "react";
import gabe from "../images/gabe.png";
export default () => {
  return (
    <>
      <div className="about">
        <img className="about-photo " src={gabe} alt="Picture of Gabe" />
        <div className="about-txt">
          <h2 className="mini-intro primary">I like waterfalls...</h2>
          <h1 className="intro">
            Hi, I'm <span className="primary">Anthony</span>
          </h1>
          <div className="about-description">
            <p>
              If I'm not busy making a website or spending time with my
              beautiful family, it probably means im off brewing coffee, brewing
              decks or fixing someone's pc. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
            <p>
              Looking to expand your brand's online footprint? You've come to
              the right place!
            </p>
          </div>
          <div className="cta-btn">
            <a className="cta-link">Get In Touch</a>
          </div>
        </div>
      </div>
    </>
  );
};
