import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../sass/Banner.scss'; // Assure-toi que ce fichier existe et contient tes styles

const Banner = ({ title, subtitle, content }) => {
 
  return (
    <div className="banner">
      <div>
      <h2>{title}</h2>
      <div>{subtitle}</div>
      <div>{content}</div>
      </div>
      <button className="ButtonTransaction"> View transactions</button>
    </div>
  );
};

export default Banner;
