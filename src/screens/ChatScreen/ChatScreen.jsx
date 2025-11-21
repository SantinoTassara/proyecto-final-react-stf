import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getContacts } from "../../services/contactService.js";
import ChatList from "../../Components/ChatList/ChatList.jsx";
import ChatDetail from "../../Components/ChatDetails/ChatDetails.jsx";

import "./ChatScreen.css";

const ChatScreen = () => {
    const [contacts, setContacts] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [selectedChatId, setSelectedChatId] = useState(null);
    const [chatDetail, setChatDetail] = useState(null);
    const { chat_id } = useParams();



    function loadContacts() {
        setLoading(true)
        setTimeout(
            () => {
                const contacts = getContacts()
                setContacts(contacts)
                setLoading(false)
            },
            2000
        )

    }
    useEffect(() => {
        loadContacts();
    }, []);



    function loadChatDetails() {
        if (contacts && !loading && chat_id) {
            const chat_selected = contacts.find(contact => Number(contact.id) === Number(chat_id))
            setChatDetail(chat_selected)
        } else if (!chat_id) {
            setChatDetail(null);
        }
    }


    useEffect(() => {
        loadChatDetails();
    }, [chat_id, contacts]);



    function addNewContact(name) {
        setContacts(
            (prev_state) => {
                const new_contact = {
                    id: prev_state.length + 1,
                    user_id: prev_state.length + 1,
                    name: name,
                    profile_picture: 'https://media.istockphoto.com/id/1208175274/es/vector/icono-vectorial-de-avatar-elemento-simple-illustrationavatar-icono-vectorial-ilustraci%C3%B3n.jpg?s=612x612&w=0&k=20&c=wxDf-xpKxb7uUvZ3YiCY6er6Lx__wE3gDaLqlpi0TKM=',
                    last_connection: 'ahora',
                    is_connected: true,
                    messages: []
                }
                return [...prev_state, new_contact]
            }
        )
    }

    function createNewMessage(message) {
        setContacts(
            (prev_state) => {
                return prev_state.map(
                    (chat) => {
                        if (Number(chat.id) === Number(chat_id)) {
                            const nextId = (chat.messages?.reduce((max, m) => Math.max(max, m.id), 0) || 0) + 1;
                            const new_message = {
                                id: nextId,
                                content: message,
                                author_id: 50, //Aca iria MI id
                                author_name: 'Yo',
                                created_at: 'Hoy',
                                status: 'VIEWED'
                            }
                            return {
                                ...chat,
                                messages: [...(chat.messages || []), new_message]
                            }
                        }
                        return chat
                    }
                )
            }
        )


        setTimeout(
            sendAutomaticMessage,
            2000
        )
    }


    function sendAutomaticMessage() {
        setContacts(
            (prev_state) => {
                return prev_state.map(
                    (chat) => {
                        if (Number(chat.id) === Number(chat_id)) {
                            const nextId = (chat.messages?.reduce((max, m) => Math.max(max, m.id), 0) || 0) + 1;
                            const new_message = {
                                id: nextId,
                                content: 'Holaaa todo bien? ;)',
                                author_id: chat.user_id,
                                author_name: chat.name,
                                created_at: 'Hoy',
                                status: 'VIEWED'
                            }
                            return {
                                ...chat,
                                messages: [...(chat.messages || []), new_message]
                            }
                        }
                        return chat
                    }
                )
            }
        )
    }

    return (
        <div className="chat-screen-container">
            <div className="chat-screen-sidebar">
                {
                    loading
                        ? <div className="loading-container"><span>Cargando contactos...</span></div>
                        : contacts && <ChatList contacts={contacts} addNewContact={addNewContact} />
                }
            </div>
            <div className="chat-screen-main">
                {
                    !loading && (
                        !chat_id
                            ? <div className="empty-chat-container"><h2>Selecciona un chat para comenzar</h2></div>
                            : (
                                chatDetail
                                    ? <ChatDetail chatDetail={chatDetail} createNewMessage={createNewMessage} />
                                    : <div className="empty-chat-container"><h2>Chat no encontrado</h2></div>
                            )
                    )
                }
            </div>
        </div>
    );
}


export default ChatScreen;