import React from "react";
import { Link } from "react-router-dom";

import "./ChatList.css";

const ChatList = ({ contacts, addNewContact }) => {

    return (
        <div className="chat-list">
            {
                contacts.map((contact) => {
                    return (
                        <div key={contact.id} className="chat-list-item">
                            <Link to={`/chat/${contact.id}`}>
                                <div>
                                    <img src={contact.profile_picture} alt={contact.name} />
                                    <h2>{contact.name}</h2>
                                    <span>Última conexión: {contact.last_connection}</span>
                                </div>
                            </Link>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default ChatList