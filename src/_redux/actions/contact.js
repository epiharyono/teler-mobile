import axios from 'axios'

export const allContacts = ()=> ({
    type: 'ALL_CONTACTS',
    payload: axios.get('http://localhost/api/v1/restoran/home')
})
