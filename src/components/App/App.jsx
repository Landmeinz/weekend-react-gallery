import React from 'react';
import axios from 'axios';

import {useState, useEffect} from 'react';

import GalleryList from '../GalleryList/GalleryList.jsx'
import MessageTray from '../MessageTray/MessageTray.jsx'



import './App.css';



// photo gallery App; 
function App() {


  // const addGalleryData = (newPost) => {
  //   axios({
  //     method: 'POST',
  //     url:    '/gallery',
  //     data:   newPost,
  //   }).then(response => {
  //     console.log('POST /gallery response:', response);
  //     fetchGalleryList();
  //   }).catch(error => {
  //     console.log('POST /gallery ERROR:', error);
  //   });
  // }


  const [messageState, setMessageState] = useState(true);

  const handleMessage = () => {
    console.log(`CLICK message button`);
    setMessageState(!messageState)
  };



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



  return (
    <div className="app-container">

      <header className="app-header">
        <h1 className="app-title">GALLERY OF STUFF I LIKE</h1>
        <button onClick={handleMessage} className="button-message">drop a short message</button>
      </header>

      <main className="main-container">

        <MessageTray 
          messageState={messageState} 
        />

        <GalleryList 
          galleryList={galleryList} 
          fetchGalleryList={fetchGalleryList}
          setGalleryList={setGalleryList}
          />
        
      </main>

      

    </div>
  );
}


export default App;
