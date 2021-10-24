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


  const [messageList, setMessageList] = useState([]);

  const fetchMessageList = () => {
    axios.get('/messages')
    .then((response) => {
      console.log('GET /messages RESPONSE', response);
      setMessageList(response.data);
    }).catch((error) => {
      console.log('GET /gallery ERROR', error);
    });
  };

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





  const [messageState, setMessageState] = useState(false);

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
