import React from 'react'
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = (images, onImageClick) => {
  return (
     <div className="container">
      <ul className={s.gallery}>
        {Array.isArray(images) &&
          images.map((image) => (
            <li key={image.id}>
              <ImageCard image={image} onClick={() => onImageClick(image)} />
            </li>
          ))}
      </ul>
    </div>
  )
}

export default ImageGallery