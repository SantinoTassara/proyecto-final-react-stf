import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getContacts } from "../../services/contactService.js";
import ChatList from "../../components/ChatList/ChatList.jsx";
import ChatDetail from "../../Components/ChatDetails/ChatDetails.jsx";

import "./ChatScreen.css";

const ChatScreen = () => {
    const [contacts, setContacts] = useState([]);
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
                    id: contacts.length + 1,
                    user_id: contacts.length + 1,
                    name: name,
                    profile_picture: 'https://via.placeholder.com/150',
                    last_connection: 'ahora',
                    is_connected: true,
                    messages: []
                }
                return [...prev_state, new_contact]
            }
        )
    }

    function createNewMessage(message) {
        const new_message = {
            id: chatDetail.message.length + 1,
            content: message,
            author_id: 50, //Aca iria MI id, ponemos un valor cualquiera
            author_name: 'Yo',
            created_at: 'Hoy',
            status: 'VIEWED'
        }
        setContacts(prev_state => {
            return prev_state.map(chat => {
                if (Number(chat.id) === Number(chat_id)) {
                    const chatMessages = chat.message ?? chat.messages ?? [];
                    return { ...chat, messages: [...chatMessages, new_message] };
                }
                return chat;
            });
        });

        // actualizar chatDetail para que la UI refleje el nuevo mensaje inmediatamente
        setChatDetail(prev => {
            if (!prev) return prev;
            const prevMsgs = prev.messages ?? [];
            return { ...prev, messages: [...prevMsgs, new_message] };
        });
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