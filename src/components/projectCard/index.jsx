import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

const ProjectCard = ({ item }) => {
  return (
    <>
      {item && (
        <Link to="/" className="link">
          <div className="projectCard">
            <img src={item.img} alt={item.username} />
            <span className="info">
              <img src={item.pp} alt={item.username} />
              <div className="texts">
                <h2>{item.cat}</h2>
                <span>{item.username}</span>
              </div>
            </span>
          </div>
        </Link>
      )}
    </>
  );
};

export default ProjectCard;
