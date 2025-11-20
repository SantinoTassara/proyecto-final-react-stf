import React from 'react'
import MessagesList from '../MessageList/MessageList'
import CreateNewMessage from '../CreateNewMessage/CreateNewMessage'

import "./ChatDetails.css"

const ChatDetail = ({ chatDetail, createNewMessage }) => {

    return (
        <div className="chat-details-container">
            <div className="chat-details-header">
                <img src={chatDetail.profile_picture} alt={chatDetail.name} className="header-avatar" />
                <div className="header-info">
                    <h2>{chatDetail.name}</h2>
                    <span className="header-status">{chatDetail.is_connected ? 'En línea' : 'Desconectado'}</span>
                </div>
            </div>
            <MessagesList messages={chatDetail.messages} />
            <CreateNewMessage createNewMessage={createNewMessage} />
        </div>
    )
}

export default ChatDetail