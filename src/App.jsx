import React from 'react';
import axios from "axios";
import { useEffect, useState } from 'react';
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

const App = () => {


const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      const response = await axios.get(
        ""
      );

    setImages(response.data.hits);
    }

    fetchImages();
  }, []);


  return (
    <div>App</div>
  )
}

export default App