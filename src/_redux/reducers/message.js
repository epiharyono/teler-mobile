const initialState = {
    results: [],
    isLoading: false,
    isError: false
}

export default function reducer(state=initialState, action){
    switch (action.type) {
        case 'ALL_MESSAGES_PENDING':
            return {...state, isLoading: true}    
        case 'ALL_MESSAGES_FULFILLED':
            return {...state, isLoading: false, results: action.payload.data}    
        case 'ALL_MESSAGES_REJECTED':
            return {...state, isLoading: false, isError: true}    
        default:
            return state
    }
}