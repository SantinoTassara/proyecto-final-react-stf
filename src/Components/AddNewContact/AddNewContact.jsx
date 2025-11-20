import React from "react";

import "./AddNewContact.css";

const AddNewContact = ({ addNewContact }) => {
    const handleSubmitNewContactForm = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;

        // llamar la función recibida como prop
        addNewContact(name);
        form.reset();
    }

    return (
        <form className="add-contact-form-container" onSubmit={handleSubmitNewContactForm}>
            <div className="form-group">
                <label htmlFor="name">Nombre:</label>
                <input type="text" id="name" name="name" placeholder="Nombre del contacto" />
            </div>
            <button type="submit" className="submit-btn">Agregar Contacto</button>
        </form>
    );
}

export default AddNewContact