import './MessageTray.css';



// when we click on the 'drop a short message' button; the message tray is deployed on the DOM; 
function MessageTray({messageState}) {

    console.log(messageState);

    const showMessageTray = (
        <div className="message-tray-show">

            <div className="message-input-container">
                <input className="message-input" type="text" placeholder="leave a message"></input>
                <button className="button-post">POST</button>
            </div>
          
          <ul className="message-display">
              <li>MESSAGES WILL GO HERE</li>
          </ul>

        </div>
      )
    
      const hideMessageTray = (
        <div className="hidden"></div>
      )
    
    return(
       <section>
          {messageState ? showMessageTray : hideMessageTray }
        </section>
    )
}; // GalleryList




export default MessageTray;