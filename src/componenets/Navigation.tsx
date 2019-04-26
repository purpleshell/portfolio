import React from "react";

const Navigation = () => {
  return (
    <header className="header-background">
      <div className="header-blur">
        <h1 className="logo">
          G<span className="red">B</span>
        </h1>
        <nav id="site-nav">
          <ul>
            <li>
              <a id="home-link" href="/">
                HOME
              </a>
            </li>
            <li>
              <a id="about-link" href="/about">
                ABOUT
              </a>
            </li>
            <li>
              <a id="portfolio-link" href="/work">
                PORTFOLIO
              </a>
            </li>
            <li>
              <a className="active" id="blog-link" href="/blog">
                BLOG
              </a>
            </li>
            <li>
              <a id="contact-link" href="/contact">
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
