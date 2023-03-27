import React from 'react';
import Featured from '../../components/featured';
import Features from '../../components/features';
import FeaturesBusiness from '../../components/featuresBusiness';
import ItemCard from '../../components/itemCard';
import ProjectCard from '../../components/projectCard';
import Slide from '../../components/slide';
import TrustedBy from '../../components/trustedBy';

import { cards, projects } from '../../data';

import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide numberItems={5}>
        {cards.map((card) => (
          <ItemCard item={card} key={card.id} />
        ))}
      </Slide>

      <Features />
      <FeaturesBusiness />

      <Slide numberItems={4}>
        {projects.map((project) => (
          <ProjectCard item={project} key={project.id} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;
