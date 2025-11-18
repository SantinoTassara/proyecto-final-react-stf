import contacts from '../data/contact_data';

function getContacts() {
    return contacts;
}

function getContactById(id) {
    const contact_found = contacts.find(contact => contact.id === id);
    if (!contact_found) {
        return null;
    } else {
        return contact_found;
    }
}

export { getContacts, getContactById };