const initialState = {
    results: [],
    isLoading: false,
    isError: false
}

export default function reducer(state=initialState, action){
    switch (action.type) {
        case 'ALL_CHANNELS_PENDING':
            return {...state, isLoading: true}    
        case 'ALL_CHANNELS_FULFILLED':
            return {...state, isLoading: false, results: action.payload.data}    
        case 'ALL_CHANNELS_REJECTED':
            return {...state, isLoading: false, isError: true}    
        default:
            return state
    }
}