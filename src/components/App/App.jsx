import React from 'react';
import axios from 'axios';

import {useState, useEffect} from 'react';

import GalleryList from '../GalleryList/GalleryList.jsx'
import GalleryItem from '../GalleryItem/GalleryItem.jsx';


import './App.css';



function App() {

  const [galleryList, setGalleryList] = useState([]);

  const fetchGalleryList = () => {
    axios.get('/gallery')
    .then((response) => {
      console.log('GET /gallery RESPONSE', response);
      setGalleryList(response.data);
    }).catch((error) => {
      console.log('GET /gallery ERROR', error);
    });
  };

  useEffect(() =>{
    fetchGalleryList();
  }, []);


  log

  return (
    <div className="app-container">

      <header className="app-header">
        <h1 className="app-title">Gallery of My Life</h1>
      </header>

      <main className="main-container">
        <GalleryList galleryList={galleryList} />
      </main>

    </div>
  );
}


export default App;
