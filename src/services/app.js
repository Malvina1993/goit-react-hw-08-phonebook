import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
  headers: {
    Autorization: "Bearer ..."
  }

})

export const requestSignUpUser = async (newUserData) => {
    const { data } = await contactsInstance.post('/users/signup', newUserData);
    return data;
}

export const requestLoginUser = async (userData) => {
    const { data } = await contactsInstance.post('/users/login', userData);
    return data;
}

export const requestLogOut = async () => {
    const { data } = await contactsInstance.post('/users/logout');
    return data;
}

export const requestRefreshUser = async () => {
    const { data } = await contactsInstance.get('/users/current');
    return data;
}

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