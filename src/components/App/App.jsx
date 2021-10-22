import React from 'react';
import axios from 'axios';

import GalleryItem from '../GalleryItem/GalleryItem.jsx';
import GalleryList from '../GalleryList/GalleryList.jsx'

import {useState, useEffect} from 'react';

import './App.css';



function App() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
