import axios from 'axios'

export const allOrder = (url,token)=> ({
    type: 'ALL_ORDERS',
    payload: axios.get(`http://teler.id/api/v1${url}`, {
        headers: {Authorization: `Bearer ${token}`}
    })
})
