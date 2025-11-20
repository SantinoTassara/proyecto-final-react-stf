import React from 'react'

import './CreateNewMessage.css'

const CreateNewMessage = ({ createNewMessage }) => {

    const handleSubmit = (event) => {
        event.preventDefault()
        const formulario = event.target
        const message_value = formulario.message.value
        createNewMessage(message_value)
        formulario.reset()
        console.log('Mensaje enviado:', message_value)
    }
    return (
        <form onSubmit={handleSubmit} className='create-message-container'>
            <div className="input-row">
                <textarea name='message' id='message' className='message-input' placeholder='Ingrese el mensaje' />
                <button type="submit" className="send-message-btn">➤</button>
            </div>
        </form>
    )
}

export default CreateNewMessage