import axios from 'axios'

export const allMessages= (channelId)=> ({
    type: 'ALL_MESSAGES',
    payload: axios.get(`http://192.168.43.69:3333/channel/${channelId}/messages`)
})