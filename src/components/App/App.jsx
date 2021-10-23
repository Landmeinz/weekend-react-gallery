import React from 'react';
// import axios from 'axios';

import {useState, useEffect} from 'react';

import GalleryList from '../GalleryList/GalleryList.jsx'
import GalleryItem from '../GalleryItem/GalleryItem.jsx';


import './App.css';



function App() {

  const [galleryList, setGalleryList] = useState([]);

  const fetchGalleryList = () => {
    
    axios.get('/gallery').then((response) => {
      console.log('GET /gallery response', response);
      // set gallery list
    }).catch((error) => {
      console.log('GET /gallery ERROR', error);
    });
  };


    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>

        <p>Gallery goes here</p>

        <GalleryList />

        {/* <img src="images/goat_small.jpg"/>
        <img src="images/peace_lily.png" width="150" height="150"/> */}

      </div>
    );
}


export default App;
