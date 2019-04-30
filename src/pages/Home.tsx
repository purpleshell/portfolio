import React from "react";

const Home = () => {
  return (
    <>
      <div className="jumbotron">
        <h2 className="job-description">Full Stack Engineer</h2>
        <h1 className="name">
          Purple<span className="primary">Shell</span>
        </h1>
        <h3 className="service-description">solutions for the modern web</h3>
      </div>
      <div className="cta-btn">
        <a className="cta-link" href="/work">
          See Projects
        </a>
      </div>
    </>
  );
};

export default Home;
