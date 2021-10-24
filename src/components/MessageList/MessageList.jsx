import './MessageList.css';


function MessageList({message}) {

    return(
        <li className="li-message">{message.message}</li>
    )
}

export default MessageList;