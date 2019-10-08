import axios from 'axios'

export const allMeja = (token)=> ({
    type: 'ALL_MEJAS',
    payload: axios.get('http://teler.id/api/v1/restoran/home', {
        headers: {Authorization: `Bearer ${token}`}
    })
})
