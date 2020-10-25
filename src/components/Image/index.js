import React from 'react';
import unknonw from '../../utils/unknown.jpg';

const Image = ({ source }) => {
  return (
    <img src={source.length > 0 ? source.images[0].url : unknonw} alt=""></img>
  );
};

export default Image;
