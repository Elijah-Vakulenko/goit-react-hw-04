import React from 'react'
import s from './ImageCard.module.css'

const ImageCard = ({ image, onClick }) => {
  const handleClick = () => {
    onClick(image);
  };
  return (
    <div>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={handleClick}
        className={s.image}
      />
    </div>
  );
};


export default ImageCard