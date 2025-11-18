import React from "react";

import "./AddNewContact.css";

const AddNewContact = () => {
    const handleSubmitNewContactForm = (event) => {
        event.preventDefault();

        const form = event.target
        const name = form.name.value;

        const newContact = {
            name: name,
        }
    }



    return (
        <form className="add-contact-form-container" onSubmit={handleSubmitNewContactForm}>
            <div className="form-group">
                <label htmlFor="name">Nombre:</label>
                <input type="name" id="name" placeholder="Nombre del contacto" />
            </div>
            <button type="submit" className="submit-btn">Agregar Contacto</button>
        </form>
    );
}