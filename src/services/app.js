import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://653eb5169e8bd3be29dfa785.mockapi.io/',
})

export const requestContacts = async () => {
    const { data } = await contactsInstance.get('/contacts');
    return data;
}


export const requestAddContact = async (contact) => {
    const { data } = await contactsInstance.post('/contacts', contact);
    return data;
}

export const requestDeleteContact = async (contactId) => {
  console.log(contactId)
    const { data } = await contactsInstance.delete(`/contacts/${contactId}`);
    return data;
}