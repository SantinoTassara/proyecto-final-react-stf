import React from 'react'

import './MessageList.css'

const MessagesList = ({ messages }) => {
    return (
        <div>
            {
                messages.length === 0
                    ? <div className="empty-messages">
                        <p>Aún no hay mensajes. ¡Inicia la conversación!</p>
                    </div>
                    : <div className="messages-list">
                        {messages.map((message) => {
                            return (
                                <div key={message.id} className={`message-item`}>
                                    <div className={`message-bubble`}>
                                        <p className="message-content">{message.content}</p>
                                        <div className="message-meta">
                                            <span className="message-time">{message.created_at}</span>
                                            <span className="message-author">{message.author_name}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        <div />
                    </div>
            }
        </div>
    )
}

export default MessagesList