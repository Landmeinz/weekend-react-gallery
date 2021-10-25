import './MessageTray.css';
import {useState} from 'react';
import MessageList from '../MessageList/MessageList.jsx'


// when we click on the 'drop a short message' button; the message tray is deployed on the DOM; 
function MessageTray({messageTrayState, messageList, postMessage}) {

    const [newMessageInput, setNewMessageInput] = useState('');
    
    // const [toggleSlideClass, setToggleSlideClass] = useState('')

    const handlePostButton = (e) => {
        e.preventDefault();

        const newMessage = {
            message: newMessageInput
        }

        // post the message from the input field on the DOM to the db; 
        postMessage(newMessage);

        // clear inputs out after submit;
        setNewMessageInput('');
    }

    const showMessageTray = (

        <div className="message-tray-show">

            <form className="message-input-container" onSubmit={handlePostButton}>
                <input
                    className="message-input"
                    type="text"
                    placeholder="leave a message"
                    maxlength="120"
                    onChange={(e) => setNewMessageInput(e.target.value)}
                    value = {newMessageInput}
                    required
                >
                </input>
                <button type="submit" className="button-post">POST</button>
            </form>
            
            <p className="recent-messages">RECENT MESSAGES</p>

            <ul className="message-display">
                {messageList.map((message) => (
                    <MessageList 
                        key={message.id}
                        message={message}
                    />
                ))}
            </ul>

        </div>
    )

    const hideMessageTray = (
        <div className="hidden"></div>
    )



    // const toggleClassOn = (
    //     setToggleSlideClass('slide-tray')
    // )




    console.log(messageTrayState);

    return (
        <section>
            {/* {messageTrayState ? toggleClassOn : toggleClassOff} */}
            {messageTrayState ? showMessageTray : hideMessageTray}
        </section>
    )
}; // GalleryList



export default MessageTray;

