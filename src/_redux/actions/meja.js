import axios from 'axios'
import {apiUrl} from '../../utils/config'

export const allMeja = (token)=> ({
    type: 'ALL_MEJAS',
    payload: axios.get(`${apiUrl}/restoran/home`, {
        headers: {Authorization: `Bearer ${token}`}
    })
})
