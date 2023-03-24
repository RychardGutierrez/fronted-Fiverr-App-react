import React from 'react';

import './index.scss';

const Featured = () => {
  return (
    <div className="featured">
      <section className="container">
        <div className="left">
          <h1>
            Find the perfect <i>freelance</i> services for your business
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input type="text" placeholder='Try "Building mobil app"' />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>Wordpress</button>
            <button>Logo Design</button>
            <button>AI service</button>
          </div>
        </div>
        <div className="right">
          <img src="./img/man.png" alt="man home" />
        </div>
      </section>
    </div>
  );
};

export default Featured;
