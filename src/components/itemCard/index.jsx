import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

const ItemCard = ({ item }) => {
  return (
    <>
      {item && (
        <Link to={'/gig?cat=design'}>
          <div className="itemCard">
            <img src={item.img} alt={item.title} />
            <span className="description">{item.desc}</span>
            <span className="title">{item.title}</span>
          </div>
        </Link>
      )}
    </>
  );
};

export default ItemCard;
