import React from 'react';
import axios from 'axios';

import GalleryList from '../GalleryList/GalleryList.jsx'
import MessageTray from '../MessageTray/MessageTray.jsx'

import {useState, useEffect} from 'react';

import './App.css';



// photo gallery App; 
function App() {

  // users can leave messages on the site; 
  const [messageList, setMessageList] = useState([]);

  // GET all of the messages on the database;
  const fetchMessageList = () => {
    axios.get('/messages')
    .then((response) => {
      console.log('GET /messages RESPONSE', response);
      setMessageList(response.data);
    }).catch((error) => {
      console.log('GET /gallery ERROR', error);
    });
  };

  // POST a new message to the database; 
  const postMessage = (newMessage) => {
    console.log('new message from postMessage:', newMessage);
    axios({
        method: `POST`,
        url:    `/messages`,
        data:   newMessage
    }).then(response => {
        console.log(`POST /messages response`, response);
        fetchMessageList();
    }).catch(error => {
        console.log(`POST /messages ERROR`, error);
    })
  }



  // tracking the state of the message tray; true === tray deployed; false === tray hidden;
  const [messageState, setMessageState] = useState(false);

  // toggle the tray appearance; 
  const handleMessage = () => {
    console.log(`CLICK message button`);
    setMessageState(!messageState)
  };


  // tracking the list of all of the photos in the gallery database; 
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

  // on page load lets grab all of the images in the gallery;
  useEffect(() =>{
    fetchGalleryList();
  }, []);

  // on page load all of the stored messages; 
  useEffect(() =>{
    fetchMessageList();
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
          messageList={messageList}
          fetchMessageList={fetchMessageList}
          postMessage={postMessage}
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
