import React from 'react'

import './MessageList.css'

const MessagesList = ({ messages }) => {
    const CURRENT_USER_ID = 50;
    return (
        <div className="messages-list-container">
            {
                !messages || messages.length === 0
                    ? <div className="empty-messages">
                        <p>Aún no hay mensajes. ¡Inicia la conversación!</p>
                    </div>
                    : <div className="messages-list">
                        {messages.map((message) => {
                            const autor = Number(message.author_id) === Number(CURRENT_USER_ID) || (message.author_name === 'Yo')
                            return (
                                <div key={message.id} className={`message-item ${autor ? 'Yo' : 'otro'}`}>
                                    <div className={`message-bubble ${autor ? 'Yo' : ''}`}>
                                        <p className="message-content">{message.content}</p>
                                        <div className="message-meta">
                                            <span className="message-time">{message.created_at}</span>
                                            <span className="message-author">{message.author_name}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
            }
        </div>
    )
}

export default MessagesList